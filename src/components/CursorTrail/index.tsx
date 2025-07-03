// src/components/CursorTrail/index.tsx
"use client";

import React, { useRef, useEffect, useCallback } from 'react';

// Define la interfaz para los puntos del rastro
interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
}

interface OrbitingPoint {
  id: number;
  baseAngle: number; // Ángulo base para la órbita
  currentAngle: number;
  x: number;
  y: number;
  color: string;
  trail: TrailPoint[]; // Cada punto tiene su propio rastro
  offsetRadius: number; // Radio de órbita individual
  offsetX: number; // Desplazamiento X relativo al cursor
  offsetY: number; // Desplazamiento Y relativo al cursor
  followDelay: number; // Retraso individual en el seguimiento
  followSpeed: number; // Velocidad individual de seguimiento
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const orbitingPoints = useRef<OrbitingPoint[]>([]); // Puntos que orbitan
  const mousePosition = useRef({ x: 0, y: 0 });
  const lastMouseTime = useRef<number>(Date.now());
  const isMouseMoving = useRef<boolean>(false);

  // Parámetros de configuración del rastro
  const config = {
    numPoints: 45, // Muchos más puntos para mejor forma circular
    maxTrailLength: 22, // Rastro más largo
    pointSize: 2, // Puntos más pequeños
    baseOrbitRadius: 28, // Radio base de órbita más pequeño
    orbitSpeed: 0.04, // Velocidad de rotación
    trailDecay: 0.06, // Velocidad de desvanecimiento del rastro
    followSpeed: 0.25, // Velocidad de seguimiento al cursor
    lineWidth: 1.8, // Grosor de las líneas más delgado
    // Colores actualizados
    colors: [
      '#9aaefb', // Azul claro
      '#8425d9', // Púrpura intenso
      '#1695f9', // Azul vibrante
      '#621dd3', // Púrpura oscuro
    ],
  };

  // Función para convertir hex a rgba
  const hexToRgba = useCallback((hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }, []);

  // Dibuja el rastro de un punto específico
  const drawPointTrail = useCallback((ctx: CanvasRenderingContext2D, point: OrbitingPoint) => {
    if (point.trail.length < 2) return;

    // Dibuja líneas conectando los puntos del rastro con gradiente
    for (let i = 0; i < point.trail.length - 1; i++) {
      const currentTrail = point.trail[i];
      const nextTrail = point.trail[i + 1];
      
      ctx.beginPath();
      ctx.moveTo(currentTrail.x, currentTrail.y);
      ctx.lineTo(nextTrail.x, nextTrail.y);
      
      // Opacidad gradual a lo largo del rastro
      const trailOpacity = (i / point.trail.length) * currentTrail.opacity;
      ctx.strokeStyle = hexToRgba(point.color, trailOpacity);
      
      ctx.lineWidth = config.lineWidth * (trailOpacity + 0.3);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    }

    // Dibuja puntos más pequeños en el rastro
    point.trail.forEach((trailPoint, index) => {
      const size = (index / point.trail.length) * 1.5 + 0.5; // Puntos más pequeños
      ctx.beginPath();
      ctx.arc(trailPoint.x, trailPoint.y, size, 0, Math.PI * 2);
      
      const pointOpacity = (index / point.trail.length) * trailPoint.opacity;
      ctx.fillStyle = hexToRgba(point.color, pointOpacity);
      ctx.fill();
    });
  }, [config.lineWidth, hexToRgba]);

  // Inicializa los puntos orbitando
  const initializeOrbitingPoints = useCallback(() => {
    orbitingPoints.current = [];
    
    // Crear múltiples capas de círculos para mejor distribución
    const layers = 4; // Más capas para mejor relleno
    const pointsPerLayer = Math.floor(config.numPoints / layers);
    
    for (let layer = 0; layer < layers; layer++) {
      const layerRadius = config.baseOrbitRadius + (layer * 8); // Capas más cercanas
      const pointsInThisLayer = layer === layers - 1 ? 
        config.numPoints - (pointsPerLayer * (layers - 1)) : 
        pointsPerLayer;
      
      for (let i = 0; i < pointsInThisLayer; i++) {
        const totalIndex = (layer * pointsPerLayer) + i;
        
        // Distribución uniforme con variación para forma más orgánica
        const baseAngle = (i / pointsInThisLayer) * Math.PI * 2 + (layer * 0.4);
        const angleVariation = (Math.random() - 0.5) * 0.2;
        const finalAngle = baseAngle + angleVariation;
        
        // Radio con variación para aspecto más natural
        const radiusVariation = (Math.random() - 0.5) * 8;
        const finalRadius = layerRadius + radiusVariation;
        
        // Calcula posición inicial
        const initialX = mousePosition.current.x + Math.cos(finalAngle) * finalRadius;
        const initialY = mousePosition.current.y + Math.sin(finalAngle) * finalRadius;
        
        // Desplazamientos para seguimiento
        const offsetDistance = 15 + (Math.random() * 12);
        const offsetX = Math.cos(finalAngle) * offsetDistance;
        const offsetY = Math.sin(finalAngle) * offsetDistance;
        
        // Propiedades individuales para movimiento disperso
        const followDelay = Math.random() * 0.3; // Retraso aleatorio 0-0.3 segundos
        const individualFollowSpeed = config.followSpeed * (0.7 + Math.random() * 0.6); // Velocidad variable
        
        orbitingPoints.current.push({
          id: totalIndex,
          baseAngle: finalAngle,
          currentAngle: finalAngle,
          x: initialX,
          y: initialY,
          color: config.colors[totalIndex % config.colors.length],
          trail: [],
          offsetRadius: finalRadius,
          offsetX,
          offsetY,
          followDelay,
          followSpeed: individualFollowSpeed
        });
      }
    }
  }, [config]);

  // Función principal de dibujo
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const currentTime = Date.now();
    const timeSinceLastMove = currentTime - lastMouseTime.current;
    isMouseMoving.current = timeSinceLastMove < 200;

    // Actualiza cada punto orbitando
    orbitingPoints.current.forEach(point => {
      if (isMouseMoving.current) {
        // Modo seguimiento disperso: cada punto se mueve en tiempos diferentes
        // Simula el retraso individual
        const timeFactor = Math.sin(Date.now() * 0.001 + point.id * 0.5) * 0.3 + 0.7; // Factor de tiempo variable
        
        // Posición objetivo con dispersión adicional
        const disperseFactor = Math.sin(Date.now() * 0.002 + point.id * 0.8) * 8; // Dispersión dinámica
        const targetX = mousePosition.current.x + point.offsetX + disperseFactor;
        const targetY = mousePosition.current.y + point.offsetY + disperseFactor;
        
        // Velocidad de seguimiento individual con factor de tiempo
        const effectiveSpeed = point.followSpeed * timeFactor;
        point.x += (targetX - point.x) * effectiveSpeed;
        point.y += (targetY - point.y) * effectiveSpeed;
        
      } else {
        // Modo órbita: cada punto orbita con velocidades ligeramente diferentes
        const individualOrbitSpeed = config.orbitSpeed + (Math.sin(point.id * 0.2) * 0.008);
        point.currentAngle += individualOrbitSpeed;
        point.x = mousePosition.current.x + Math.cos(point.currentAngle) * point.offsetRadius;
        point.y = mousePosition.current.y + Math.sin(point.currentAngle) * point.offsetRadius;
        
        // Actualiza los offsets con variación para movimiento más natural
        const baseDistance = 16 + (Math.sin(point.currentAngle * 3 + point.id * 0.5) * 4);
        point.offsetX = Math.cos(point.currentAngle) * baseDistance;
        point.offsetY = Math.sin(point.currentAngle) * baseDistance;
      }

      // Añade la posición actual al rastro del punto
      point.trail.push({
        x: point.x,
        y: point.y,
        opacity: 0.9
      });

      // Limita la longitud del rastro
      if (point.trail.length > config.maxTrailLength) {
        point.trail.shift();
      }

      // Actualiza la opacidad del rastro (desvanecimiento)
      point.trail.forEach((trailPoint, index) => {
        trailPoint.opacity -= config.trailDecay;
        if (trailPoint.opacity < 0) trailPoint.opacity = 0;
      });

      // Elimina puntos del rastro que ya no son visibles
      point.trail = point.trail.filter(trailPoint => trailPoint.opacity > 0.05);

      // Dibuja el rastro de este punto
      drawPointTrail(ctx, point);
    });

    animationFrameId.current = requestAnimationFrame(draw);
  }, [config, drawPointTrail]);

  // Maneja el movimiento del ratón
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePosition.current.x = e.clientX;
    mousePosition.current.y = e.clientY;
    lastMouseTime.current = Date.now();
  }, []);

  // Configuración inicial del canvas
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Inicializa los puntos orbitando
      initializeOrbitingPoints();
      
      // Inicia el bucle de dibujo
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(draw);
    }
  }, [draw, initializeOrbitingPoints]);

  // useEffect para manejar los event listeners y la limpieza
  useEffect(() => {
    // Inicializa la posición del mouse en el centro
    mousePosition.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    setupCanvas();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', setupCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setupCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [setupCanvas, handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Muy importante: para que no bloquee clics y selecciones
        zIndex: 99999, // Asegúrate de que esté por encima de todo
        background: 'transparent', // Asegúrate de que el canvas sea transparente para ver tu página
      }}
    />
  );
};

export default CursorTrail;
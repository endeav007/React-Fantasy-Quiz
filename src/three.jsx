import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function MouseLight(){

    const containerRef = useRef();

    useEffect(() =>{

        const scene = new THREE.Scene();

        const width = window.innerWidth;
        const height = window.innerHeight;
        const camera = new THREE.OrthographicCamera(
            width / -2,
            width / 2,
            height / 2,
            height / -2,
            1,
            1000
        );
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        containerRef.current.appendChild(renderer.domElement);

        // Create a glowing circle texture (radial gradient)
        const size = 256;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createRadialGradient(
            size / 2,
            size / 2,
            0,
            size / 2,
            size / 2,
            size / 2
        );

        gradient.addColorStop(0, 'rgba(255, 253, 134, 0.8)');
        gradient.addColorStop(1, 'rgba(249, 215, 20, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        const texture = new THREE.CanvasTexture(canvas);


        const geometry = new THREE.PlaneGeometry(300, 300);
            const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            depthWrite: false,
        });


        const glowPlane = new THREE.Mesh(geometry, material);
        scene.add(glowPlane);

        // Mouse position in Three.js coords
        const mouse = new THREE.Vector2(0, 0);
        const targetPosition = new THREE.Vector3(0, 0, 0);

        // Mouse move handler
        function onMouseMove(event) {
            mouse.x = event.clientX - width / 2;
            mouse.y = height / 2 - event.clientY; // invert y for three.js coords
        }
        window.addEventListener('mousemove', onMouseMove);


        function animate() {
            requestAnimationFrame(animate);
            // Smoothly interpolate glowPlane position towards mouse
            targetPosition.x += (mouse.x - targetPosition.x) * 0.1;
            targetPosition.y += (mouse.y - targetPosition.y) * 0.1;
            glowPlane.position.copy(targetPosition);

            renderer.render(scene, camera);
        }
        animate();

        /*
        function onResize() {
            const w = window.innerWidth;
            const h = window.innerHeight;
            camera.left = w / -2;
            camera.right = w / 2;
            camera.top = h / 2;
            camera.bottom = h / -2;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        }
    window.addEventListener('resize', onResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
    */


    }, []);

    return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', width: '100vw', height: '100vh', zIndex: 9999 }} />;


}
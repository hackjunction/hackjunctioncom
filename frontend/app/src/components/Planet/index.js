import React from 'react';
import * as THREE from 'three/build/three.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import EventCard from '../EventCard'
const Planet = () => {
    const { useRef, useEffect, useState } = React;
    const mount = useRef(null);

    useEffect(() => {
        const RADIUS = 10;
        const SIZE = RADIUS * 0.04;
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const absoluteMouse = new THREE.Vector2();
        const events = {
            1: {
                lat: 60.1699,
                lon: -24.9384,
                color: 0x00ff00,
                info: "Junction X Oulu",
                __id: 1,
            },
            2: {
                lat: 35.9334,
                lon: -30.8597,
                color: 0xff0000,
                info: "Junction X Ankara",
                __id: 2,
            },
            3: {
                lat: 35.6762,
                lon: -139.6503,
                color: 0x0000ff,
                info: "Junction X Tokyo",
                __id: 3,
            },
            4: {
                lat: 40.7128,
                lon: 74.006,
                color: 0xaa00aa,
                info: "Junction X NY",
                __id: 4,
            },
        };
        console.log("m", mount)
        let width = 400//mount.current.clientWidth;
        let height = 400//mount.current.clientHeight;
        let frameId;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xaaaaaa);

        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.2,
            RADIUS * 10,
        );
        camera.position.z = 25;
    
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
    
        renderer.setSize(width, height);

        const handleResize = () => {
            console.log("resixiing")
            width = mount.current.clientWidth;
            height = mount.current.clientHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
            mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;
            absoluteMouse.x = event.clientX;
            absoluteMouse.y = event.clientY;
        }
        
        const hover = () => {
            raycaster.setFromCamera(mouse, camera);
            // calculate objects intersecting the picking ray
            var intersects = raycaster.intersectObjects(scene.children);
            if (intersects[0] && intersects[0].object.__id) {
                document.getElementById("info").innerHTML =
                    events[intersects[0].object?.__id].info;
                document.getElementById("the_line").setAttribute("x2", absoluteMouse.x);
                document.getElementById("the_line").setAttribute("y2", absoluteMouse.y);
            }
        }
        
        const renderPlanet = () => {
            THREE.ImageUtils.crossOrigin = "";
            var geometry = new THREE.SphereGeometry(RADIUS, 100, 100);
            var omaterial = new THREE.MeshBasicMaterial();
            omaterial.map = new THREE.TextureLoader().load(
                "https://res.cloudinary.com/hackjunction/image/upload/v1593019499/test/test/junction-website-globe-01-fitted_FIX.png",
            );
            omaterial.transparent = true;
        
            const omesh = new THREE.Mesh(geometry, omaterial);
            scene.add(omesh);
        }
        
        const renderDataPoints = () => {
            Object.keys(events).forEach((k) => {
                const e = events[k];
                scene.add(renderEvent(...latlonToXZY(e.lat, e.lon), e.__id, e.color));
            });
        }
        
        const renderEvent = (x, z, y, index, color) => {
            console.log(x, y, z, index, color);
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({ color: color });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(x * RADIUS, y * RADIUS, z * RADIUS);
        
            cube.lookAt(0, 0, 0);
            cube.scale.y = SIZE;
            cube.scale.x = SIZE;
            cube.__id = index;
        
            return cube;
        }

        const latlonToXZY = (lat, lon) => {
            var cosLat = Math.cos((lat * Math.PI) / 180.0);
            var sinLat = Math.sin((lat * Math.PI) / 180.0);
            var cosLon = Math.cos((lon * Math.PI) / 180.0);
            var sinLon = Math.sin((lon * Math.PI) / 180.0);
            return [cosLat * cosLon, cosLat * sinLon, sinLat];
        }
        
        const animate = () => {
            console.log("animating")
            hover();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        renderPlanet();
        renderDataPoints();    

        mount.current.appendChild(renderer.domElement);
        window.addEventListener("resize", handleResize);

        window.addEventListener("mousemove", onMouseMove, false);
        animate();
    }, []);

    return (
        <div
            className="vis"
            ref={mount}
        >
            <EventCard />
        </div>    
    );
};

export default Planet;

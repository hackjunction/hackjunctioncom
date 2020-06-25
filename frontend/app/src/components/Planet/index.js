import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import * as THREE from "three/build/three.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { mapEventsByLongitude } from "../../redux/events/selectors";

import EventCard from "../EventCard";

import "./style.scss";

const useStyles = makeStyles({
    planetContainer: {
        background: "#FBFBFB",
        display: "flex",
        flexDirection: "row",
    },
    vis: {
        width: "100%",
        position: "static",
        float: "right",
    },
});

const Planet = (props) => {
    const classes = useStyles();
    const mount = useRef(null);

    const [eventData, setEventData] = useState(null);
    useEffect(() => {
        const RADIUS = 10;
        const SIZE = RADIUS * 0.04;
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const { events } = props;
        console.log("events in here are", events);
        /*
        const events = {
            1: {
                lat: 60.1699,
                lon: -24.9384,
                color: 0x00ff00,
                data: { title: "Junction X Oulu", date: "soon", desc: "huutis ja myötis" },
                __id: 1,
            },
            2: {
                lat: 35.9334,
                lon: -30.8597,
                color: 0xff0000,
                data: { title: "Junction X Ankara", date: "soonish", desc: "Hyytis ja myötis" },
                __id: 2,
            },
            3: {
                lat: 35.6762,
                lon: -139.6503,
                color: 0x0000ff,
                data: { title: "Junction X Tokyo", date: "past", desc: "Junction X TokyoJunction X TokyoJunction X TokyoJunction X TokyoJunction X Tokyo" },
                __id: 3,
            },
            4: {
                lat: 40.7128,
                lon: 74.006,
                color: 0xaa00aa,
                data: { title: "Junction X NY", date: "now", desc: "Junction x asteriski and this is qute a bit longer thext that the other just to test that it looks okay on the componsnent. Does it?" },
                __id: 4,
            },
        };
        */

        console.log("m", mount);
        /*
        let height = mount.current.clientHeight;
        let width = height;
        */
        let width = window.screen.width / 3;
        let height = width;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xfbfbfb);

        const camera = new THREE.PerspectiveCamera(
            45,
            width / height,
            0.2,
            RADIUS * 10,
        );
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ antialias: true });

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;

        renderer.setSize(width, height);

        const handleResize = () => {
            console.log("resixiing");
            let width = window.screen.width / 3;
            let height = width;
            console.log(height, width);
            renderer.setSize(width, height, true);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        const onMouseMove = (event) => {
            var scrollTop =
                window.pageYOffset !== undefined
                    ? window.pageYOffset
                    : (
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body
                      ).scrollTop;
            // console.log(event.clientX - renderer.domElement.offsetLeft, scrollTop + event.clientY - renderer.domElement.offsetTop)
            mouse.x =
                ((event.clientX - renderer.domElement.offsetLeft) /
                    renderer.domElement.clientWidth) *
                    2 -
                1;
            mouse.y =
                -(
                    (scrollTop +
                        event.clientY -
                        renderer.domElement.offsetTop) /
                    renderer.domElement.clientHeight
                ) *
                    2 +
                1;
        };

        const hover = () => {
            raycaster.setFromCamera(mouse, camera);
            // calculate objects intersecting the picking ray
            var intersects = raycaster.intersectObjects(scene.children);
            // scene.add(new THREE.ArrowHelper( raycaster.ray.direction, raycaster.ray.origin, 100, Math.random() * 0xffffff ));
            // console.log(raycaster, intersects)
            if (intersects[0] && intersects[0].object.__id) {
                console.log("set", events[intersects[0].object?.__id]);
                setEventData(events[intersects[0].object?.__id]);
            }
        };

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
        };

        const renderDataPoints = () => {
            Object.keys(events).forEach((k) => {
                const e = events[k];
                // TODO add event color, and seperate globecoordinate ":D"
                scene.add(
                    renderEvent(
                        ...latlonToXZY(e.latitude, -e.longitude),
                        k,
                        Math.random() * 0xffffff,
                    ),
                );
            });
        };

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
        };

        const latlonToXZY = (lat, lon) => {
            var cosLat = Math.cos((lat * Math.PI) / 180.0);
            var sinLat = Math.sin((lat * Math.PI) / 180.0);
            var cosLon = Math.cos((lon * Math.PI) / 180.0);
            var sinLon = Math.sin((lon * Math.PI) / 180.0);
            return [cosLat * cosLon, cosLat * sinLon, sinLat];
        };

        const animate = () => {
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
        <div className={classes.planetContainer}>
            <EventCard {...eventData} />
            <div className={classes.vis} ref={mount} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    events: mapEventsByLongitude(state),
});

export default connect(mapStateToProps)(Planet);

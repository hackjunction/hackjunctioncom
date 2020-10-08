import React, { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import * as THREE from 'three/build/three.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { mapHubsByLongitude } from '../../redux/hubs/selectors'

import HubTextBox from '../HubTextBox'

import './style.scss'

const useStyles = makeStyles({
  planetContainer: {
    background: '#F5D2A2',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  vis: {
    width: 'auto',
    marginLeft: 'auto',
  },
})
const Planet = (props) => {
  const classes = useStyles()
  const mount = useRef(null)

  const [hubData, setHubData] = useState(null)
  useEffect(() => {
    const RADIUS = 10
    const SIZE = RADIUS * 0.04
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const { hubs } = props
    let width = (window.screen.width * 0.85) / 3
    let height = width

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf5d2a2)

    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.2,
      RADIUS * 10
    )
    camera.position.set(0, 0, 30)
    const renderer = new THREE.WebGLRenderer({ antialias: true })

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    // Dumb but works
    controls.autoRotate = true
    controls.autoRotateSpeed = -1000.0
    controls.update()
    controls.autoRotate = false

    renderer.setSize(width, height)

    const handleResize = () => {
      let width = (window.screen.width * 0.85) / 3
      let height = width
      renderer.setSize(width, height, true)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    const onMouseMove = (hub) => {
      var rect = renderer.domElement.getBoundingClientRect()
      mouse.x = -1 + (2 * (hub.clientX - rect.left)) / rect.width
      mouse.y = 1 - (2 * (hub.clientY - rect.top)) / rect.height
    }

    const hover = () => {
      raycaster.setFromCamera(mouse, camera)
      // calculate objects intersecting the picking ray
      var intersects = raycaster.intersectObjects(scene.children)
      /*scene.add(
                new THREE.ArrowHelper(
                    raycaster.ray.direction,
                    raycaster.ray.origin,
                    100,
                    Math.random() * 0xffffff,
                ),
            );*/
      if (intersects[0] && intersects[0].object.__id) {
        console.log('set', hubs[intersects[0].object?.__id])
        setHubData(hubs[intersects[0].object?.__id])
      }
    }

    const renderPlanet = () => {
      THREE.ImageUtils.crossOrigin = ''
      var geometry = new THREE.SphereGeometry(RADIUS, 100, 100)
      var omaterial = new THREE.MeshBasicMaterial()
      omaterial.map = new THREE.TextureLoader().load(
        'https://res.cloudinary.com/hackjunction/image/upload/v1593432114/test/test/junction-globe-website-KAIKKIMUKANA-01.png'
      )
      omaterial.transparent = true

      const omesh = new THREE.Mesh(geometry, omaterial)
      scene.add(omesh)
    }

    const renderDataPoints = () => {
      Object.keys(hubs).forEach((k) => {
        const e = hubs[k]
        // TODO add hub color, and seperate globecoordinate ":D"
        scene.add(
          renderHub(
            ...latlonToXZY(e.latitude, -e.longitude),
            k,
            Math.random() * 0xffffff
          )
        )
      })
    }

    const renderHub = (x, z, y, index, color) => {
      console.log(x, y, z, index, color)
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: color })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(x * RADIUS, y * RADIUS, z * RADIUS)

      cube.lookAt(0, 0, 0)
      cube.scale.y = SIZE
      cube.scale.x = SIZE
      cube.__id = index

      return cube
    }

    const latlonToXZY = (lat, lon) => {
      var cosLat = Math.cos((lat * Math.PI) / 180.0)
      var sinLat = Math.sin((lat * Math.PI) / 180.0)
      var cosLon = Math.cos((lon * Math.PI) / 180.0)
      var sinLon = Math.sin((lon * Math.PI) / 180.0)
      return [cosLat * cosLon, cosLat * sinLon, sinLat]
    }

    const animate = () => {
      hover()
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    renderPlanet()
    renderDataPoints()

    mount.current.appendChild(renderer.domElement)
    window.addEventListener('resize', handleResize)

    window.addEventListener('mousemove', onMouseMove, false)
    animate()
  }, [])

  return (
    <div className={classes.planetContainer}>
      <HubTextBox {...hubData} />
      <div className={classes.vis} ref={mount} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  hubs: mapHubsByLongitude(state),
})

export default connect(mapStateToProps)(Planet)

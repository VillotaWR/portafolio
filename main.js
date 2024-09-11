import {loadGLTF, loadVideo} from "./libs/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
        imageTargetSrc: './assets/targets/marcportafolio.mind'
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

   // const raccoon = await loadGLTF('./assets/models/musicband-raccoon/scene.gltf');
   // raccoon.scene.scale.set(0.1, 0.1, 0.1);
   // raccoon.scene.position.set(0, -0.4, 0);

   // const bear = await loadGLTF('./assets/models/musicband-bear/scene.gltf');
   // bear.scene.scale.set(0.1, 0.1, 0.1);
   // bear.scene.position.set(0, -0.4, 0);

   // const raccoonAnchor = mindarThree.addAnchor(0);
   // raccoonAnchor.group.add(raccoon.scene);

   // const bearAnchor = mindarThree.addAnchor(1);
     // bearAnchor.group.add(bear.scene);


      //aqui pongo la parte del video 1
      const video = await loadVideo("./assets/videos/sintel/libroradoctorado.mp4");
      const texture = new THREE.VideoTexture(video);

     // const geometry = new THREE.PlaneGeometry(1, 204 / 480);
      const geometry = new THREE.PlaneGeometry(1, 360 / 580);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);

      const anchor = mindarThree.addAnchor(0);
      anchor.group.add(plane);

      anchor.onTargetFound = () => {
          video.play();
      }
      anchor.onTargetLost = () => {
          video.pause();
      }
      video.addEventListener('play', () => {
          video.currentTime = 6;
      });

       //aqui pongo la parte del video 2
      const video2 = await loadVideo("./assets/videos/sintel/librodfra.mp4");
      const texture2 = new THREE.VideoTexture(video2);

     // const geometry = new THREE.PlaneGeometry(1, 204 / 480);
      const geometry2 = new THREE.PlaneGeometry(1, 360 / 580);
      const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
      const plane2 = new THREE.Mesh(geometry2, material2);

      const anchor2 = mindarThree.addAnchor(1);
      anchor2.group.add(plane2);

      anchor2.onTargetFound = () => {
          video2.play();
      }
      anchor2.onTargetLost = () => {
          video2.pause();
      }
      video2.addEventListener('play', () => {
          video2.currentTime = 6;
      });

      //aqui pongo la parte del video 3
      const video3 = await loadVideo("./assets/videos/sintel/caplibr_educ_innov.mp4");
      const texture3 = new THREE.VideoTexture(video3);

     // const geometry = new THREE.PlaneGeometry(1, 204 / 480);
      const geometry3 = new THREE.PlaneGeometry(1, 360 / 580);
      const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
      const plane3 = new THREE.Mesh(geometry3, material3);

      const anchor3 = mindarThree.addAnchor(2);
      anchor3.group.add(plane3);

      anchor3.onTargetFound = () => {
          video3.play();
      }
      anchor3.onTargetLost = () => {
          video3.pause();
      }
      video3.addEventListener('play', () => {
          video3.currentTime = 6;
      });

      //aqui pongo la parte del video 4
      const video4 = await loadVideo("./assets/videos/sintel/caplibrteoria.mp4");
      const texture4 = new THREE.VideoTexture(video4);

     // const geometry = new THREE.PlaneGeometry(1, 204 / 480);
      const geometry4 = new THREE.PlaneGeometry(1, 360 / 580);
      const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
      const plane4 = new THREE.Mesh(geometry4, material4);

      const anchor4 = mindarThree.addAnchor(3);
      anchor4.group.add(plane4);

      anchor4.onTargetFound = () => {
          video4.play();
      }
      anchor4.onTargetLost = () => {
          video4.pause();
      }
      video4.addEventListener('play', () => {
          video4.currentTime = 6;
      });

       //aqui pongo la parte del video 5
      const video5 = await loadVideo("./assets/videos/sintel/sensores.mp4");
      const texture5 = new THREE.VideoTexture(video5);

     // const geometry = new THREE.PlaneGeometry(1, 204 / 480);
      const geometry5 = new THREE.PlaneGeometry(1, 360 / 580);
      const material5 = new THREE.MeshBasicMaterial({ map: texture5 });
      const plane5 = new THREE.Mesh(geometry5, material5);

      const anchor5 = mindarThree.addAnchor(4);
      anchor5.group.add(plane5);

      anchor5.onTargetFound = () => {
          video5.play();
      }
      anchor5.onTargetLost = () => {
          video5.pause();
      }
      video5.addEventListener('play', () => {
          video5.currentTime = 6;
      });

       //aqui pongo la parte del video 6
      const video6 = await loadVideo("./assets/videos/sintel/trucos_chatgpt.mp4");
      const texture6 = new THREE.VideoTexture(video6);

     // const geometry = new THREE.PlaneGeometry(1, 204 / 480);
      const geometry6 = new THREE.PlaneGeometry(1, 360 / 580);
      const material6 = new THREE.MeshBasicMaterial({ map: texture6 });
      const plane6 = new THREE.Mesh(geometry6, material6);

      const anchor6 = mindarThree.addAnchor(5);
      anchor6.group.add(plane6);

      anchor6.onTargetFound = () => {
          video6.play();
      }
      anchor6.onTargetLost = () => {
          video6.pause();
      }
      video6.addEventListener('play', () => {
          video6.currentTime = 6;
      });

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});

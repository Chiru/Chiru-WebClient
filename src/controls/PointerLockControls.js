/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.PointerLockControls = function ( camera ) {

	var scope = this;

	var pitchObject = new THREE.Object3D();
	pitchObject.add( camera );
    camera.position.set(0,0,0);
    pitchObject.position.set(0, -16, 0);

	var yawObject = new THREE.Object3D();
    yawObject.position.set(0, 30, 0);
	yawObject.add( pitchObject );

	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;
    var touchStartX = 0;
    var touchStartY = 0;

	var isOnObject = false;
	var canJump = false;

	var velocity = new THREE.Vector3();

	var PI_2 = Math.PI / 2;

	var onMouseMove = function ( event ) {

		if ( scope.enabled === false ) return;

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		yawObject.rotation.y -= movementX * 0.002;
		pitchObject.rotation.x -= movementY * 0.002;

		pitchObject.rotation.x = Math.max( - PI_2, Math.min( PI_2, pitchObject.rotation.x ) );

	};

	var onKeyDown = function ( event ) {

		switch ( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true; break;

			case 40: // down
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				if ( canJump === true ) velocity.y += 3;
				canJump = false;
				break;

		}

	};

	var onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 38: // up
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
			case 83: // a
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;

		}

	};
    var onTouchStart = function (event){
        if ( event.touches.length === 1 ) {

            var touch = event.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;

        }else if ( event.touches.length === 2) {
            event.keyCode = 38;
            onKeyDown(event);
        }

    };

    var onTouchMove = function (event) {
        if ( event.touches.length === 1 ) {

            var touch = event.touches[0];
            event['movementX'] = touchStartX -touch.clientX;
            event['movementY'] = touchStartY - touch.clientY;
            onMouseMove(event);

        }
    };
    var onTouchEnd = function (event){
        if ( event.touches.length === 1 ) {
            touchStartX = 0;
            touchStartY = 0;
        }else if ( event.touches.length === 2) {
            event.keyCode = 38;
            onKeyUp(event);
        }
    };

	document.addEventListener( 'mousemove', onMouseMove, false );
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );

    document.addEventListener( 'touchmove', onTouchMove, false );
    document.addEventListener( 'touchstart', onTouchStart, false );
    document.addEventListener( 'touchend', onTouchEnd, false );

	this.enabled = false;

	this.getObject = function () {

		return yawObject;

	};

	this.isOnObject = function ( bool ) {

		isOnObject = bool;
		canJump = bool;

	};

	this.update = function ( delta ) {

		if ( scope.enabled === false ) return;

		delta *= 0.05;

		velocity.x += ( - velocity.x ) * 0.08 * delta;
		velocity.z += ( - velocity.z ) * 0.08 * delta;

		velocity.y -= 0.15 * delta;

		if ( moveForward ) velocity.z -= 0.15 * delta;
		if ( moveBackward ) velocity.z += 0.15 * delta;

		if ( moveLeft ) velocity.x -= 0.12 * delta;
		if ( moveRight ) velocity.x += 0.12 * delta;

		if ( isOnObject === true ) {

			velocity.y = Math.max( 0, velocity.y );

		}

		yawObject.translateX( velocity.x );
		yawObject.translateY( velocity.y ); 
		yawObject.translateZ( velocity.z );

		if ( yawObject.position.y < 8 ) {

			velocity.y = 0;
			yawObject.position.y = 8;

			canJump = true;

		}

	};

};

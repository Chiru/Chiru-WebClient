/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author paulirish / http://paulirish.com/
 * @author Toni Dahl
 */

(function ( namespace, undefined ) {
    var util, FreeLookControls;

    util = namespace.util;

    FreeLookControls = namespace.FreeLookControls = function ( placeable, sceneMgr ) {

        this.domElement = sceneMgr.container;

        this.placeable = placeable;
        this.object = new THREE.Object3D(); // Dummy object for transformations
        this.target = new THREE.Vector3( 0, 0, 0 );

        this.movementSpeed = 1.0;
        this.lookSpeed = 0.5;
        this.autoForward = false;

        this.lookVertical = true;

        this.heightSpeed = true;
        this.heightCoef = 1.0;
        this.heightMin = 0.0;
        this.heightMax = 1.0;

        this.verticalMin = 0;
        this.verticalMax = Math.PI;

        this.autoSpeedFactor = 0.0;

        if ( this.domElement !== document ) {

            this.domElement.setAttribute( 'tabindex', -1 );

        }


        var mouseXDelta = 0,
            mouseYDelta = 0,
            mouseXStart = 0,
            mouseYStart = 0,
            lat = 0,
            oldLat = 0,
            lon = 0,
            oldLon = 0,
            phi = 0,
            theta = 0,
            viewHalfX = 0,
            viewHalfY = 0,
            mouseDown = false,
            moveForward = false,
            moveBackward = false,
            moveLeft = false,
            moveRight = false,
            moveUp = false,
            moveDown = false,
            freeze = false,
            actualMoveSpeed = 0,

            // Shortcuts
            radToDeg = THREE.Math.radToDeg,
            degToRad = THREE.Math.degToRad,
            targetPosition = this.target,
            position = this.object.position,
            rotation = this.object.rotation;


        this.getMousePosition = function ( event ) {
            var mouseX, mouseY;

            if ( this.domElement === document ) {

                mouseX = event.pageX - viewHalfX;
                mouseY = event.pageY - viewHalfY;

            } else {

                mouseX = event.pageX - this.domElement.offsetLeft - viewHalfX;
                mouseY = event.pageY - this.domElement.offsetTop - viewHalfY;

            }
            event.mouseX = mouseX;
            event.mouseY = mouseY;
        };

        this.computeTargetPosition = function () {
            lon = oldLon + mouseXDelta * this.lookSpeed;
            if ( this.lookVertical ) {
                lat = oldLat + mouseYDelta * this.lookSpeed;
            }

            lat = Math.max( -85, Math.min( 85, lat ) );
            phi = degToRad( 90 - lat );

            theta = degToRad( lon );

            targetPosition.x = position.x + 100 * Math.sin( phi ) * Math.cos( theta );
            targetPosition.y = position.y + 100 * Math.cos( phi );
            targetPosition.z = position.z + 100 * Math.sin( phi ) * Math.sin( theta );
        };

        this.handleResize = function () {

            if ( this.domElement === document ) {

                viewHalfX = window.innerWidth / 2;
                viewHalfY = window.innerHeight / 2;

            } else {

                viewHalfX = this.domElement.offsetWidth / 2;
                viewHalfY = this.domElement.offsetHeight / 2;

            }

        };

        this.onMouseDown = function ( event ) {

            if ( this.domElement !== document ) {

                this.domElement.focus();

            }

            event.preventDefault();
            event.stopPropagation();

            this.getMousePosition( event );


            mouseXStart = event.mouseX;
            mouseYStart = event.mouseY;
            this.computeTargetPosition();

            mouseDown = true;

        };


        this.onMouseUp = function ( event ) {

            event.preventDefault();
            event.stopPropagation();

            mouseDown = false;
            oldLat = lat;
            oldLon = lon;
            mouseXDelta = mouseYDelta = 0;
        };

        this.onMouseMove = function ( event ) {
            event.preventDefault();
            event.stopPropagation();

           if(mouseDown){
                this.getMousePosition( event );

                mouseXDelta = event.mouseX - mouseXStart;
                mouseYDelta = event.mouseY - mouseYStart;

                this.computeTargetPosition();

                this.object.lookAt( targetPosition );
                this.placeable.setRotation( radToDeg( rotation.x ), radToDeg( rotation.y ),
                    radToDeg( rotation.z ) );

            }
        };

        this.onKeyDown = function ( event ) {
            //event.preventDefault();

            switch (event.keyCode) {

            case 38: /*up*/
            case 87: /*W*/
                moveForward = true;
                break;

            case 37: /*left*/
            case 65: /*A*/
                moveLeft = true;
                break;

            case 40: /*down*/
            case 83: /*S*/
                moveBackward = true;
                break;

            case 39: /*right*/
            case 68: /*D*/
                moveRight = true;
                break;

            case 32: /*Space*/
            case 82: /*R*/
                moveUp = true;
                break;

            case 70: /*F*/
                moveDown = true;
                break;

            case 81: /*Q*/
                freeze = !this.freeze;
                break;

            }

        };

        this.onKeyUp = function ( event ) {

            switch (event.keyCode) {

            case 38: /*up*/
            case 87: /*W*/
                moveForward = false;
                break;

            case 37: /*left*/
            case 65: /*A*/
                moveLeft = false;
                break;

            case 40: /*down*/
            case 83: /*S*/
                moveBackward = false;
                break;

            case 39: /*right*/
            case 68: /*D*/
                moveRight = false;
                break;

            case 32: /*Space*/
            case 82: /*R*/
                moveUp = false;
                break;
            case 17: /*ctrl*/
            case 70: /*F*/
                moveDown = false;
                break;

            }
        };

        this.update = function ( delta ) {

            if ( freeze ) {

                return;
            }

            actualMoveSpeed = delta * this.movementSpeed;

            if ( moveForward ) {
                this.object.translateZ( -actualMoveSpeed );
                this.placeable.setPosition(position.x, position.y, position.z);
            }
            if ( moveBackward ) {
                this.object.translateZ( actualMoveSpeed );
                this.placeable.setPosition(position.x, position.y, position.z);
            }

            if ( moveLeft ) {
                this.object.translateX( -actualMoveSpeed );
                this.placeable.setPosition(position.x, position.y, position.z);
            }
            if ( moveRight ) {
                this.object.translateX( actualMoveSpeed );
                this.placeable.setPosition(position.x, position.y, position.z);
            }

            if ( moveUp ) {
                this.object.translateY( actualMoveSpeed );
                this.placeable.setPosition(position.x, position.y, position.z);
            }
            if ( moveDown ) {
                this.object.translateY( -actualMoveSpeed );
                this.placeable.setPosition(position.x, position.y, position.z);
            }


        };

        this.setPlaceable = function ( placeable ) {
            if ( placeable instanceof namespace.ECPlaceable ) {
                this.placeable = placeable;
                this.object = placeable.getSceneNode();
            }
        };

        this.reset = function () {
            var sceneNode = this.placeable.getSceneNode();
            this.object.position.copy( sceneNode.position );
            this.object.rotation.copy( sceneNode.rotation );
            this.object.scale.copy( sceneNode.scale );

            //TODO: Reverse calculate lookat target position so that camera wont jump when moving it the first time
        };


        this.domElement.addEventListener( 'contextmenu', function ( event ) {
            event.preventDefault();
        }, false );

        this.domElement.addEventListener( 'mousemove', bind( this, this.onMouseMove ), false );
        this.domElement.addEventListener( 'mousedown', bind( this, this.onMouseDown ), false );
        this.domElement.addEventListener( 'mouseup', bind( this, this.onMouseUp ), false );
        this.domElement.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
        this.domElement.addEventListener( 'keyup', bind( this, this.onKeyUp ), false );

        function bind( scope, fn ) {

            return function () {

                fn.apply( scope, arguments );

            };

        }

        this.handleResize();

    };


}( window['webtundra'] = window['webtundra'] || {} ));

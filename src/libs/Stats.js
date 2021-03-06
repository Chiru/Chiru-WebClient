/**
 * @author mrdoob / http://mrdoob.com/
 */

var Stats = function () {

	var startTime = Date.now(), prevTime = 0;
	var ms = 0, msMin = Infinity, msMax = 0;
	var fps = 0, fpsMin = Infinity, fpsMax = 0, fpsAccumulator = 0, recordFPSValues = false, measurements = 0, averageFPS = 0,
        totalSamples = 0, samplingDelay = 1000, waitForStop = false;
	var frames = 0, mode = 0;
    var average = 0;

	var container = document.createElement( 'div' );
	container.id = 'stats';
	container.addEventListener( 'mousedown', function ( event ) { event.preventDefault(); setMode( ++ mode % 2 ) }, false );
	container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

	var fpsDiv = document.createElement( 'div' );
	fpsDiv.id = 'fps';
	fpsDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#002';
	container.appendChild( fpsDiv );

	var fpsText = document.createElement( 'div' );
	fpsText.id = 'fpsText';
	fpsText.style.cssText = 'color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	fpsText.innerHTML = 'FPS';
	fpsDiv.appendChild( fpsText );

	var fpsGraph = document.createElement( 'div' );
	fpsGraph.id = 'fpsGraph';
	fpsGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0ff';
	fpsDiv.appendChild( fpsGraph );

	while ( fpsGraph.children.length < 74 ) {

		var bar = document.createElement( 'span' );
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#113';
		fpsGraph.appendChild( bar );

	}

	var msDiv = document.createElement( 'div' );
	msDiv.id = 'ms';
	msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;display:none';
	container.appendChild( msDiv );

	var msText = document.createElement( 'div' );
	msText.id = 'msText';
	msText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	msText.innerHTML = 'MS';
	msDiv.appendChild( msText );

	var msGraph = document.createElement( 'div' );
	msGraph.id = 'msGraph';
	msGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0f0';
	msDiv.appendChild( msGraph );

	while ( msGraph.children.length < 74 ) {

		var bar = document.createElement( 'span' );
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#131';
		msGraph.appendChild( bar );

	}

	var setMode = function ( value ) {

		mode = value;

		switch ( mode ) {

			case 0:
				fpsDiv.style.display = 'block';
				msDiv.style.display = 'none';
				break;
			case 1:
				fpsDiv.style.display = 'none';
				msDiv.style.display = 'block';
				break;
		}

	};

	var updateGraph = function ( dom, value ) {

		var child = dom.appendChild( dom.firstChild );
		child.style.height = value + 'px';

	};

	return {

		REVISION: 11,

		domElement: container,

		setMode: setMode,

		begin: function () {

			startTime = Date.now();

		},

		end: function () {

			var time = Date.now();
            /*
			ms = time - startTime;
			msMin = Math.min( msMin, ms );
			msMax = Math.max( msMax, ms );

			msText.textContent = ms + ' MS (' + msMin + '-' + msMax + ')';
			updateGraph( msGraph, Math.min( 30, 30 - ( ms / 200 ) * 30 ) );
            */
			frames ++;

			if ( time > prevTime + samplingDelay ) {

                if ( prevTime ) {
                    fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
                    fpsMin = Math.min( fpsMin, fps );
                    fpsMax = Math.max( fpsMax, fps );

                    fpsText.textContent = fps + ' FPS (' + fpsMin + '-' + fpsMax + ')';
                    updateGraph( fpsGraph, Math.min( 30, 30 - ( fps / 100 ) * 30 ) );

                    if ( recordFPSValues ) {
                        //console.warn( fps )
                        fpsAccumulator += fps;
                        measurements++;

                        if ( !waitForStop && measurements === totalSamples ) {
                            //console.warn( fpsAccumulator )
                            this.stopRecording();
                        }
                    }
                }

				prevTime = time;
				frames = 0;

			}


			return time;

		},

		update: function () {

			startTime = this.end();

		},

        recordFPSValues: function( nSamples, delay ){
            samplingDelay = parseInt(delay, 10) ? delay : 1000;
            recordFPSValues = true;
            waitForStop = false;
            fpsAccumulator = 0;
            totalSamples = parseInt(nSamples, 10) ? nSamples : 10;
            measurements = 0;
            fpsMin = 0;
            fpsMax = 0;

            if(!nSamples){
                waitForStop = true;
                console.warn("Stats: Recording FPS values until stopped.");
            } else{
                console.warn("Stats: Recording FPS values for", totalSamples*samplingDelay, "milliseconds. " +
                    "Taking", totalSamples, "samples.");
            }

            return true;
        },

        stopRecording: function() {
            recordFPSValues = false;
            waitForStop = false;
            return this.getAverageFPS();
        },

        getAverageFPS: function(){
            if(fpsAccumulator > 0 && measurements > 0){
                averageFPS = fpsAccumulator / measurements;
                webtundra.util.log(measurements+'');

                fpsAccumulator = 0;
                measurements = 0;

                return averageFPS;
            }
            return false;

        }


	}

};

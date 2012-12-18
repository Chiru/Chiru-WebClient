#

from compress import *

scripts = [
    #Libs must be placed before other js files
    '../src/libs/jquery-1.8.3.min.js',
    '../src/libs/three.min.js',

    '../src/util/WebNaali.js',
    '../src/util/general/Signals.js',
    '../src/util/parsers/ColladaLoader.js',
    '../src/util/parsers/parseUri.js',
    '../src/util/controls/PointerLockControls.js',
    '../src/util/general/Detector.js',
    '../src/util/networking/WSManager.js',
    '../src/util/scene/AssetManager.js',
    '../src/util/scene/ECModel.js',
    '../src/util/scene/SceneParser.js',
    '../src/util/scene/SceneManager.js',
    '../src/util/scene/Renderer.js'
]

out_uncompressed = '../build/webnaali.js'
out = '../build/webnaali.min.js'

def main():
    print 'Compressing JavaScript files into %s' % out
    compress(scripts, out, 'externs.js', False, out_uncompressed)

if __name__ == '__main__':
    main()

#

from compress import *

scripts = [
    '../src/libs/three.min.js', # Libraries must be also placed before the js-files that utilize them
    '../src/gui/gui.js',
    '../src/util/Detector.js',
    '../src/util/ColladaLoader.js',
    #'../src/util/FirstPersonControls.js',
    '../src/util/PointerLockControls.js',
    '../src/util/THREEx.FullScreen.js',
    '../src/util/parseUri.js',
    '../src/util/wsmanager.js',
    #'../src/main.js',
    ]

out_uncompressed = '../app.js'
out = '../app.min.js'

def main():
    print 'Compressing JavaScript files into %s' % out
    compress(scripts, out, False, out_uncompressed)

if __name__ == '__main__':
    main()

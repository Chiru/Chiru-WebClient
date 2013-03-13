"""
For conditions of distribution and use, see copyright notice in LICENSE

@author Toni Dahl

"""


from compress import *
import argparse

def main():

    out_uncompressed = '../build/webtundra.js'
    out = '../build/webtundra.min.js'
    externs = 'externs.js'
    scripts = 'scripts.txt'

    # Parsing the arguments
    parser = argparse.ArgumentParser(description='Compile and compress the project.')
    parser.add_argument("-a", "--advanced", help="Use advanced compress methods. May break the code!",
        action="store_true")
    parser.add_argument("-v", "--verbose", help="Increase compiler verbosity.",
        action="store_true")
    parser.add_argument("-e", "--externs", help="Externs js-file path.")
    parser.add_argument("-s", "--scripts", help="A file listing the js-files to-be-compiled.")

    args = parser.parse_args()

    if args.advanced:
        print '## Compiling with Advanced Compilation mode.'
    if args.verbose:
        print '## Verbose mode on.'
    if args.externs:
        externs = args.externs
    if args.scripts:
        scripts = args.scripts

    # Parsing the scripts file
    scriptsList =  [line.strip() for line in open(scripts) if not line.startswith('#') and line.strip()]

    print '## Compressing JavaScript files into %s' % out
    compress(scriptsList, out, externs, out_uncompressed, args.advanced, args.verbose)

if __name__ == '__main__':
    main()

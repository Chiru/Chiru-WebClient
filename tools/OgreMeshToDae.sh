### For conditions of distribution and use, see copyright notice in LICENSE

## @author Toni Dahl



for i in *.mesh
do
    # Conversion from MESH to XML
    echo "Converting $i to XML..."
    OgreXMLConverter -q $i
    xmlFile="$i.xml"

    if [ ! -f $xmlFile ]
    then
        echo "MESH->XML conversion failed!"
        continue
    fi

    echo "Done."

    # Conversion from XML to COLLADA
    echo "Converting $xmlFile to COLLADA..."

    daeFile="${xmlFile/.mesh.xml}"
    assimp export $xmlFile "$daeFile.temp.dae"

    if [ ! -f "$daeFile.temp.dae" ]
    then
        echo "XML->COLLADA conversion failed!"
        continue
    fi

    echo "Done."
    rm -f $xmlFile

    # Fixing the COLLADA file so textures display correctly
    echo "Fixing stuff (that assimp broke) in $daeFile.temp.dae..."
    sed '/TEXCOORD.*tex1/d' ./"$daeFile.temp.dae" > ./"$daeFile.dae"

    if [ ! -f "$daeFile.dae" ]
    then
        echo "Fixing hack failed!"
        continue
    fi

    rm -f "$daeFile.temp.dae"
    echo "Done."

done

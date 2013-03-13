### For conditions of distribution and use, see copyright notice in LICENSE

## @author Toni Dahl

for i in *.mesh
do
    # Conversion from MESH to XML
    echo "Converting $i to XML..."
    OgreXMLConverter -q $i

    if [ ! -f "$i.xml" ]
    then
        echo "MESH->XML conversion failed!"
        continue
    fi

    echo "Done."

done

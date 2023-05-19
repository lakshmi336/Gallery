function gallery(srcVal)
        {
            var allImg=document.images
            for(i=0;i<=allImg.length-1;i++)
            {
                allImg[i].src=`${i}.jpg`
            }
            console.log(srcVal)
            document.getElementById("subcontainer").style.backgroundImage=`URL(${srcVal})`
        }
        function removeimage()
        {
            document.getElementById("container1").style.display="none"
            document.getElementById("container").style.display="flex"
        }
        function loadbigImage()
        {
            document.getElementById("container1").style.display="flex"
            document.getElementById("container").style.display="none"
        }
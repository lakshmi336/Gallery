//function gallery()
//{
//    var allImg=document.images
//    for(i=0;i<=allImg.length-1;i++)
//    {
//        allImg[i].src=`${i}.jpg`
//    }
//}
bimage=document.getElementById('bimage');

image=document.getElementById('image');
imageSrc=document.getElementById('image').src;

image1=document.getElementById('image1');
image1Src=document.getElementById('image1').src;

image2=document.getElementById('image2');
image2Src=document.getElementById('image2').src;

image3=document.getElementById('image3');
image3Src=document.getElementById('image3').src;

image4=document.getElementById('image4');
image4Src=document.getElementById('image4').src;

image5=document.getElementById('image5');
image5Src=document.getElementById('image5').src;

image6=document.getElementById('image6');
image6Src=document.getElementById('image6').src;

image7=document.getElementById('image7');
image7Src=document.getElementById('image7').src;

image8=document.getElementById('image8');
image8Src=document.getElementById('image8').src;

image9=document.getElementById('image9');
image9Src=document.getElementById('image9').src;

image.addEventListener("click",function(){
    bimage.src=imageSrc
})

image1.addEventListener("click",function(){
    bimage.src=image1Src
})

image2.addEventListener("click",function(){
    bimage.src=image2Src
})

image3.addEventListener("click",function(){
    bimage.src=image3Src
})

image4.addEventListener("click",function(){
    bimage.src=image4Src
})

image5.addEventListener("click",function(){
    bimage.src=image5Src
})

image6.addEventListener("click",function(){
    bimage.src=image6Src
})

image7.addEventListener("click",function(){
    bimage.src=image7Src
})

image8.addEventListener("click",function(){
    bimage.src=image8Src
})

image9.addEventListener("click",function(){
    bimage.src=image9Src
})
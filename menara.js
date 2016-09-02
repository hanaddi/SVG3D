s=35;
//benda[benda.length] = [];
for(var j=0;j<2;j++){	
	tot=8;
	for(var i=0;i<tot;i++){	
		su=Math.PI*2/tot;
		benda[benda.length] = [[0,0,-s],[0,s*4,-s],[s*Math.sin(su),s*4,s*(-Math.cos(su))],[s*Math.sin(su),0,s*(-Math.cos(su))]];
		rotA(benda,0,su,0);
	}
	traZ(benda,0,s*4,0);
}
traZ(benda,0,-s*18,0);
a=0;
warna=[];
for (var i=a;i<benda.length;i++){
	warna[i]=Math.floor(Math.random()*1000000);
}//alert(warna[1]);
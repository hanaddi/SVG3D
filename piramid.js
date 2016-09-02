s=35;
//for(var jj=-4;jj<2;jj++)	
for(var j=-4;j<4;j++){	
	for(var i=0;i<8;i++){	
	if(i==0){
		benda[benda.length] = [[(i-0.35)*s,j*s,-0.2*s],[(i+0)*s+s,j*s,-0.2*s],[(i+0)*s+s,j*s+s,-0.2*s],[(i-0.35)*s,j*s+s,-0.2*s]];
	}
	//	benda[benda.length] = [[i*s,j*s,0],[i*s+s,j*s,0],[(i+0.9)*s,(j+0.2)*s,0],[i*s+s,j*s+s,0],[i*s,j*s+s,0],[(i-1+0.9)*s,(j+0.2)*s,0]];
		benda[benda.length] = [[i*s,j*s,0],[i*s+s,j*s,0],[(i+0.9)*s,(j+0.2)*s,0.1*s],[(i-1+0.9)*s,(j+0.2)*s,0.1*s]];
		benda[benda.length] = [[(i+0.9)*s,(j+0.2)*s,0.1*s],[i*s+s,j*s+s,0],[i*s,j*s+s,0],[(i-1+0.9)*s,(j+0.2)*s,0.1*s]];
	}
}traZ(benda,0.35*s,0,0);
rotZ(benda,Math.PI/2,2,1);
rotZ(benda,Math.PI/4,0,1);

a=0;
warna=[];
for (var i=a;i<a+54;i++){
	warna[i]="cdcdcd";
}
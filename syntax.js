
s=50;
t=10;
aa='4ea2eb';	
bb='eeeeee';	
cc='00009f';	

for(var j=0;j<8;j++){	
	for(var i=0;i<8;i++){	
		benda[benda.length] = [[i*s+t,j*s+t,0],[i*s+s,j*s+t,0],[i*s+s,j*s+s,0],[i*s+t,j*s+s,0]];
		benda[benda.length] = [[i*s+t,j*s+t,s],[i*s+s,j*s+t,s],[i*s+s,j*s+s,s],[i*s+t,j*s+s,s]];
		benda[benda.length] = [[i*s+t,j*s+t,s],[i*s+s,j*s+t,s],[i*s+s,j*s+t,0],[i*s+t,j*s+t,0]];
		benda[benda.length] = [[i*s+s,j*s+t,s],[i*s+s,j*s+s,s],[i*s+s,j*s+s,0],[i*s+s,j*s+t,0]];
		benda[benda.length] = [[i*s+t,j*s+s,s],[i*s+s,j*s+s,s],[i*s+s,j*s+s,0],[i*s+t,j*s+s,0]];
		benda[benda.length] = [[i*s+t,j*s+s,s],[i*s+t,j*s+t,s],[i*s+t,j*s+t,0],[i*s+t,j*s+s,0]];
	}
}
traZ(benda,-4*(s+t),-4*(s+t),0);
rotZ(benda,Math.PI/4,0,1);

a=0;
warna=[];
for (var i=a;i<a+54;i++){
	warna[i]=aa;
}
a+=54;
for (var i=a;i<a+36;i++){
	warna[i]=bb;
}
a+=36;
for (var i=a;i<a+12;i++){
	warna[i]=aa;
}
a+=12;
for (var i=a;i<a+24;i++){
	warna[i]=cc;
}
a+=24;
for (var i=a;i<a+6;i++){
	warna[i]=bb;
}
a+=6;
for (var i=a;i<a+18;i++){
	warna[i]=aa;
}
a+=18;
for (var i=a;i<a+6;i++){
	warna[i]=cc;
}
a+=6;
for (var i=a;i<a+24;i++){
	warna[i]=bb;
}
a+=24;
for (var i=a;i<a+18;i++){
	warna[i]=aa;
}
a+=18;
for (var i=a;i<a+36;i++){
	warna[i]=cc;
}
a+=36;
for (var i=a;i<a+12;i++){
	warna[i]=aa;
}
a+=12;
for (var i=a;i<a+30;i++){
	warna[i]=bb;
}
a+=30;
for (var i=a;i<a+6;i++){
	warna[i]=cc;
}
a+=6;
for (var i=a;i<a+12;i++){
	warna[i]=aa;
}
a+=12;
for (var i=a;i<a+6;i++){
	warna[i]=bb;
}
a+=6;
for (var i=a;i<a+30;i++){
	warna[i]=cc;
}
a+=30;
for (var i=a;i<a+54;i++){
	warna[i]=aa;
}
a+=54;
//ditulis oleh 		:Fat Han Nuraddin (fat.han.nuraddin@gmail.com)
//mulai pengerjaan 	:Cisitu Lama, 30 Agustus 2015
/************************************************************/

//kamus
var pivotX=0;	//titik tengah window sumbu x
var pivotY=0;	//titik tengah window sumbu y
var benda=[];	//array statis bentuk objek
var benda1=[];	//array dinamis bentuk objek
var bendaR=[];	//array dinamis bentuk objek saat rotasi
var s=1;		//skala besar objek 3d
var pengali=1;	//skala besar objek 2d
var isRot=false;//cek apakah ojek sedang dirotasi
var isPivMove=false;//cek apakah pivot sedang ditranslasi

var rx=0;		//titik awal x saat rotasi
var ry=0;		//titik awal y saat rotasi
var dx=0;		//jarak titik dengan pivot x saat translasi
var dy=0;		//jarak titik dengan pivot y saat translasi
var rx1=0;		//titik akhir x saat rotasi
var ry1=0;		//titik akhir y saat rotasi
/*************************************************
* bentuk[0]=style path
* bentuk[1]=data vertex 3d
* bentuk[2]=data vertex 2d
* bentuk[3]=atribut tambahan
*
*[0]style path
* bentuk[0][0]=fill
* bentuk[0][1]=fill-opacity
* bentuk[0][2]=fill-rule
* bentuk[0][3]=stroke
* bentuk[0][4]=stroke-width
* bentuk[0][5]=stroke-linecap
* bentuk[0][6]=stroke-linejoin
* bentuk[0][7]=stroke-miterlimit
* bentuk[0][8]=stroke-opacity
*************************************************/

//fungsi
function getPivot(){
	//Mendapatkan titik tengah window
	pivotX=innerWidth/2;
	pivotY=innerHeight/2;
}
function startSVG(){
	//membuat layar svg
	document.getElementById('svg').innerHTML='<svg width="'+(pivotX*2)+'" height="'+(pivotY*2)+'"><g id="svg-layar"></g></svg>';
}
function pangkat(a,b){
	//menghasilkan a^b
	return Math.exp(b*Math.log(a));
}
function indeks(arr){
	//menghasilkan nilai dari path
	//nilai terbesar adalah gambar paling jauh/bawah (z index)
	//masih SALAH
	var zz=0;
	var yy=0;
	var xx=0;
	for(var i=0;i<arr[1][0].length;i++){
		zz+=arr[1][0][i][2];
		yy+=arr[1][0][i][1];
		xx+=arr[1][0][i][0];
	}
	zz/=arr[1][0].length;
	xx/=arr[1][0].length;
	yy/=arr[1][0].length;
	return (zz*1000000+xx+yy);
}
function d3tod2(ar3){
	//mengubah 3 titik koordinat 3d ke 2 titik koordinat 2d
	//untuk 1 data vertex
	var ar2=[];
	for(var j=0;j<ar3[1].length;j++){
		ar2[j]=[];
		for(var i=0;i<ar3[1][j].length;i++){
			var xx=ar3[1][j][i][0]*pangkat(0.9,ar3[1][j][i][2]/75+1);
			var yy=ar3[1][j][i][1]*pangkat(0.9,ar3[1][j][i][2]/75+1);
			ar2[j][i]=[];
			ar2[j][i][0]=xx*pengali+pivotX;
			ar2[j][i][1]=yy*pengali+pivotY;
		}
	}
	//contoh element array ar2 -> ar2[1]=[[1,2],[3,4],[5,6]];
	return ar2;
}
function menggambar(arr){
	//menggambar objek
	
	//mengurutkan 
	var inn=[];
	for(var i=0;i<arr.length;i++){
		inn[i]=[];
		inn[i]['id']=indeks(arr[i]);
		inn[i]['no']=i;
	}
	for(var i=0;i<inn.length-1;i++){
		for(var j=i+1;j<inn.length;j++){
			if(inn[j]['id']>inn[i]['id']){
				var temp=inn[j];
				inn[j]=inn[i];
				inn[i]=temp;
			}
		}
	}
	
	//mulai menggambar
	var isi='';
	var i=0;
	while(i<inn.length){
		isi+="<path d='";
		var d2=[];
		d2=d3tod2(arr[inn[i]['no']]);
		for(var j=0;j<d2.length;j++){
			isi+="M ";
			for(var k=0;k<d2[j].length;k++){
				isi+=d2[j][k][0]+" "+d2[j][k][1]+" L ";
			}
			isi+=d2[j][d2[j].length-1][0]+" "+d2[j][d2[j].length-1][1]+" z ";
		}
		//warna=setWarna(arr[inn[i]['no']]);
		warna=(arr[inn[i]['no']][0][0]);
		//if(inn[i]['no']%2==1)warna=(arr[inn[i]['no']][0][0]);
		
		isi+="' style='fill:#"+warna
		+";fill-opacity:"+arr[inn[i]['no']][0][1]
		+";fill-rule:"+arr[inn[i]['no']][0][2]
		+";stroke:#"+arr[inn[i]['no']][0][3]
		+";stroke-width:"+arr[inn[i]['no']][0][4]
		+";stroke-linecap:"+arr[inn[i]['no']][0][5]
		+";stroke-linejoin:"+arr[inn[i]['no']][0][6]
		+";stroke-miterlimit:"+arr[inn[i]['no']][0][7]
		+";stroke-opacity:"+arr[inn[i]['no']][0][8]+"' ";
		if(arr[inn[i]['no']][2]){
			isi+=arr[inn[i]['no']][2];
		}
		isi+=" />";
		i++;
	}
	document.getElementById('svg-layar').innerHTML=isi;
	
}
function dec2hex(qq){
	//mengubah desimal ke heksadesimal
	qq1=new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');
	qq2=[];
	qq3=qq;
	while(qq3>0){
		qq2[qq2.length]=qq3%16;
		qq3=Math.floor(qq3/16);
	}
	qq4="";
	for(a=qq2.length-1;a>=0;a--){
		qq4+=qq1[qq2[a]];
	}
	qq4=(qq4.length==0)?'0':qq4;
	return qq4;
	
}
function setWarna(ar3){
	//mengubah warna sesuai arah sumber cahaya -> masih salah
	var intens=-ar3[3][2]/ar3[3][1];
	intens=Math.abs(intens);
	//intens+=Math.abs(ar3[3][0]/ar3[3][2]);
	//intens+=Math.abs(ar3[3][1]/ar3[3][2]);
	//intens/=2;

	var hex={'0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'a':10,'b':11,'c':12,'d':13,'e':14,'f':15};
	//merah
	var r0=hex[ar3[0][0][0]]*16+hex[ar3[0][0][1]];
	//hijau
	var g0=hex[ar3[0][0][2]]*16+hex[ar3[0][0][3]];
	//biru
	var b0=hex[ar3[0][0][4]]*16+hex[ar3[0][0][5]];
	r0*=(intens+1);
	g0*=(intens+1);
	b0*=(intens+1);
//	r0=(r0+255)*255/510;
//	g0=(g0+255)*255/510;
//	b0=(b0+255)*255/510;
	r0=(r0>255)?255:Math.floor(r0);
	g0=(g0>255)?255:Math.floor(g0);
	b0=(b0>255)?255:Math.floor(b0);
	var r1=dec2hex(r0);
	var g1=dec2hex(g0);
	var b1=dec2hex(b0);
	r1=(r1.length==1)?'0'+r1:r1;
	g1=(g1.length==1)?'0'+g1:g1;
	b1=(b1.length==1)?'0'+b1:b1;
	
	return r1+g1+b1;
	//return ar3[0][0];
	
}
function persgaris(ar3){
	//menghasilkan array persamaan 3 variabel [x,y,z,d] dari sisi
	y0=ar3[1][0][0][1];
	
	//membuat titik
	var P={'x':ar3[1][0][0][0], 'y':ar3[1][0][0][1], 'z':ar3[1][0][0][2]};
	var Q={'x':ar3[1][0][1][0], 'y':ar3[1][0][1][1], 'z':ar3[1][0][1][2]};
	var R={'x':ar3[1][0][2][0], 'y':ar3[1][0][2][1], 'z':ar3[1][0][2][2]};
	
	//membuat vektor
	var A={'x':(Q.x-P.x), 'y':(Q.y-P.y), 'z':(Q.z-P.z)};
	var B={'x':(R.x-P.x), 'y':(R.y-P.y), 'z':(R.z-P.z)};
	
	//mencari koefisien variabel
	var xx=A.y*B.z-A.z*B.y;
	var yy=A.z*B.x-A.x*B.z;
	var zz=A.x*B.y-A.y*B.x;
	var dd=-xx*P.x-yy*P.y-zz*P.z;
	return [xx,yy,zz,dd];
}
//////////////////////
//	TRANSFORMASI	//
//////////////////////
{
//////ROTASI//////////////
function rotZ(ar3,a,p,q){
	//rotasi pada sumbu tertentu
	a=a % (2*Math.PI);	//sudut
	for(var i=0;i<ar3.length;i++){
		for(var k=0;k<ar3[i][1].length;k++){
			for(var j=0;j<ar3[i][1][k].length;j++){
				r=Math.sqrt(ar3[i][1][k][j][p]*ar3[i][1][k][j][p]+ar3[i][1][k][j][q]*ar3[i][1][k][j][q]);
				a1=ar3[i][1][k][j][p];
				a2=ar3[i][1][k][j][q];
				ar3[i][1][k][j][p]=a1*Math.cos(a)-a2*Math.sin(a);
				ar3[i][1][k][j][q]=a1*Math.sin(a)+a2*Math.cos(a);
			}
		}
	}
	return ar3;
}
function rotasi(ar3,a,b,c){
	rotZ(ar3,a,2,1);
	rotZ(ar3,b,2,0);
	rotZ(ar3,c,1,0);
	return ar3;
}
//translasi
function translasi(ar,a,b,c){
	var ar3=ar;
	for(var i=0;i<ar3.length;i++){
		for(var j=0;j<ar3[i][1].length;j++){
			for(var k=0;k<ar3[i][1][j].length;k++){
				ar3[i][1][j][k][0]+=a;
				ar3[i][1][j][k][1]+=b;
				ar3[i][1][j][k][2]+=c;
			}
		}
	}
	return ar3;
}
//DILATASI/////////////////
function dilatasi(ar,a,b,c){
	var ar3=ar;
	for(var i=0;i<ar3.length;i++){
		for(var j=0;j<ar3[i][1].length;j++){
			for(var k=0;k<ar3[i][1][j].length;k++){
				ar3[i][1][j][k][0]*=a;
				ar3[i][1][j][k][1]*=b;
				ar3[i][1][j][k][2]*=c;
			}
		}
	}
	return ar3;
}
}
//////////////////////////////
//	TRANSFORMASI SELESAI	//
//////////////////////////////

function loadBentuk(data){
	robota();
///////////////////////////////////////////////////////////////////////
	for(var i=0;i<benda.length;i++){
		benda[i][3]=persgaris(benda[i]);
		benda[i][0][0]=setWarna(benda[i]);
		//benda[i][0][1]='0';
	}
//////////////////////////////////*/////////////////////////////////////
	s=buatskala(benda,200);
//	pengali=30;
	for(var i=0;i<benda.length;i++){
		for(var j=0;j<benda[i][1].length;j++){
			for(var k=0;k<benda[i][1][j].length;k++){
				benda[i][1][j][k][0]*=s;
				benda[i][1][j][k][1]*=s;
				benda[i][1][j][k][2]*=s;
			}
		}
	}//*/
	benda1=JSON.parse(JSON.stringify(benda));
}


function buatskala(ar,smax){
//mencari nilai skala yang pas
//smax nilai titik paling jauh yang dihasilkan
	var ar3=ar;
	var maxy=0;
	var maxx=0;
	var maxz=0;
	for(var i=0;i<ar3.length;i++){
		for(var j=0;j<ar3[i][1].length;j++){
			for(var k=0;k<ar3[i][1][j].length;k++){
				maxx=(ar3[i][1][j][k][0]>maxx)?ar3[i][1][j][k][0]:maxx;
				maxy=(ar3[i][1][j][k][1]>maxy)?ar3[i][1][j][k][1]:maxy;
				maxz=(ar3[i][1][j][k][2]>maxz)?ar3[i][1][j][k][2]:maxz;
			//	ar3[i][1][j][k][1]*=b;
			//	ar3[i][1][j][k][2]*=c;
			}
		}
	}
	var max=maxx;
	max=(maxy>max)?maxy:max;
	max=(maxz>max)?maxz:max;
	return smax/max;
}
function putar(){
	if(isputar){
		//memutar objek
		rotasi(benda1,0,Math.PI/(120),0.0001);
	//	rotasi(benda1,0,0,Math.PI/181);
		menggambar(benda1);
		window.setTimeout('putar()',50);
	}
}

//event handler
/*
window.onload=function(){
	var include=document.createElement("script");
	include.src='robot.js';
	document.head.insertBefore(include,document.head.childNodes[0]);
//	robota();
}//*/
{
function onlo() {
	loadBentuk();
	getPivot();
	startSVG();
	rotasi(benda1,-Math.PI/2,0,0);
	putar();
}
var isputar=true; //cek apakah benda sedang diputar
window.addEventListener("keydown", function(e) {
//	robota();
//	rotasi(benda,-Math.PI/2,0,0);
//	loadBentuk();
	if(e.which==32){
		isputar=!(isputar);
		if(isputar)putar();
	}
});

window.addEventListener("resize", function() {
	getPivot();
	startSVG();
	//rotasi(benda1,0.2,0.3,0.4);
	menggambar(benda1);
});
window.addEventListener('mousedown',function(e){
	if(e.which==1){
//	if(e.which==1){
//	if(true){
		isRot=true;
		rx=e.pageX;
		ry=e.pageY;
		bendaR=JSON.parse(JSON.stringify(benda1));
	}else if(e.which==2){
		isPivMove=true;
		dx=pivotX-e.pageX;
		dy=pivotY-e.pageY;
	}
});
window.addEventListener('mousemove',function(e){
	if(isRot){
		rx1=e.pageX;
		ry1=e.pageY;
		benda1=JSON.parse(JSON.stringify(bendaR));
		var sudutY=-(rx1-rx)*Math.PI/450;
		var sudutX=-(ry1-ry)*Math.PI/450;
		rotasi(benda1,0,sudutY,0);
		rotasi(benda1,sudutX,0,0);

		menggambar(benda1);
	}
	if (isPivMove){
		pivotX=e.pageX+dx;
		pivotY=e.pageY+dy;
		menggambar(benda1);
	}
});
window.addEventListener('mouseup',function(e){
	isRot=false;
	isPivMove=false;
	rx=0;
	ry=0;
	rx1=0;
	ry1=0;
});
window.addEventListener('wheel',function(e){
	if(e.deltaY>0){
		pengali-=0.03;
	//	translasi(benda1,0,0,30*pengali);
	}else{
		pengali+=0.03;
	//	translasi(benda1,0,0,-30*pengali);
	}
	pengali=(pengali<0)?0:pengali;
	menggambar(benda1);
});
}
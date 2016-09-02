var benda1=[];
var benda=[];
var warna=[];
var tx=0;
var ty=0;
var tz=0;
var rx=0;
var ry=0;
var rz=0;
var stebal=1;
var strans=1;
var strans2=1;
var s=1;
var swarna='#000000';
var wmuka=false;

var pivX,pivY;
/////PANGKAT///////////////////////////////////////////////
function pangkat(a,b){
	return Math.exp(b*Math.log(a));
}
/////////////////////////////////////////////////////////////////////
function set(){
	pivX=innerWidth/2;
	pivY=innerHeight/2;
}
function setsvg(){
	sus();
	document.getElementById('plus').innerHTML='<svg width="'+(pivX*2)+'" height="'+(pivY*2)+'" id="svg3d"  version="1.1" inkscape:version="0.48.5 r10040"><g id="layar"></g></svg>';
	menggambar(benda1,warna);
}

function d3tod2(ar3){
//mengubah koordinat 3d menjadi 2d
	var ar2=[];
	for(var i=0;i<ar3.length;i++){
		var xx=ar3[i][0]*pangkat(0.9,ar3[i][2]/75+1);
		var yy=ar3[i][1]*pangkat(0.9,ar3[i][2]/75+1);
		ar2[i]=[];
		ar2[i][0]=xx;
		ar2[i][1]=yy;
	}
	return ar2;
}

//////ROTASI//////////////
function rotZ(ar3,xx,yy,zz){
	return rota(rota(rota(ar3,zz,0,1),yy,2,0),xx,1,2);
}
function rota(ar3,a,p,q){
	a=a % (2*Math.PI);
	for(var i=0;i<ar3.length;i++){
		for(var j=0;j<ar3[i].length;j++){//>
			r=Math.sqrt(ar3[i][j][p]*ar3[i][j][p]+ar3[i][j][q]*ar3[i][j][q]);
			a1=ar3[i][j][p];
			a2=ar3[i][j][q];
			ar3[i][j][p]=a1*Math.cos(a)-a2*Math.sin(a);
			ar3[i][j][q]=a1*Math.sin(a)+a2*Math.cos(a);
		}
	}
	return ar3;
}
function rotasi(e){
	ry=-(e.pageX-pivX)/190;
	rx=(e.pageY-pivY)/120;
//	sus();
	menggambar(benda1,warna);
}
//////*///////////////

//DILATASI/////////////////
function dilZ(ar,a,b,c){
	var ar3=ar;
	for(var i=0;i<ar3.length;i++){
		for(var j=0;j<ar3[i].length;j++){
			ar3[i][j][0]*=a;
			ar3[i][j][1]*=b;
			ar3[i][j][2]*=c;
		}
	}
	return ar3;
}
////////////////////////
//TRANSLASI/////////////////
function traZ(ar,a,b,c){
	var ar3=ar;
	for(var i=0;i<ar3.length;i++){
		for(var j=0;j<ar3[i].length;j++){
			ar3[i][j][0]+=a;
			ar3[i][j][1]+=b;
			ar3[i][j][2]+=c;
		}
	}
	return ar3;
}
/*/////////////////////
s = 35;
benda[0] = [[s*10,s*0,s*0],[s*-10,s*0,s*0]];
benda[1] = [[s*0,s*10,s*0],[s*0,s*-10,s*0]];
benda[2] = [[s*0,s*0,s*10],[s*0,s*0,s*-10]];
warna = ['ff0000','00ff00','0000ff'];

////*//////////////////////
</script>

<script type='text/javascript' id='ko' src='mobil.js'></script>

<script>//*
function translasi(e){
	var gr=3;
	var a=e.keyCode;//alert(a);
	if(a==97){
		tx-=gr;
	}
	if(a==100){
		tx+=gr;
	}
	if(a==119){
		ty-=gr;
	}
	if(a==115){
		ty+=gr;
	}
	if(a==113){
		tz-=gr;
	}
	if(a==101){
		tz+=gr;
	}
//	sus();
	menggambar(benda1,warna);
}
///////////////////////////////////////////////

function sus(){
	benda1=JSON.parse(JSON.stringify(benda));
	//antisipasi
	for (var i=warna.length;i<benda1.length;i++){
		warna[i]=warna[warna.length-1];
	}
//	rotZ(benda1,rx,1,2);
//	rotZ(benda1,ry,2,0);
//	rotZ(benda1,rz,0,1);
//	traZ(benda1,tx,ty,tz);
}
/////////////////////////*////////////////////////////////////////////////

function indeks(arr){
//indeks terbesar adalah gambar paling jauh/bawah (z index)
	zz=0;
	yy=0;
	xx=0;
	for(var i=0;i<arr.length;i++){
		zz+=arr[i][2];
		yy+=arr[i][1];
		xx+=arr[i][0];
	}
	zz/=arr.length;
	xx/=arr.length;
	yy/=arr.length;
//	return (zz*10000+Math.abs(xx)+Math.abs(yy));
	return (zz*1000000+xx+yy);
}

//MEMBUAT PATH////////////////////////////////////////////////
function cod(arr,warna){
//membentuk path, dari node
	nod="M ";
	for(var i=0;i<arr.length;i++){
		nod+=(arr[i][0]+pivX)+","+(arr[i][1]+pivY)+" ";
	}
	nod+="z";
	aa='';
	if(wmuka)aa="#"+warna;
	else aa=swarna;
	return "<path d='"+nod+"' style='fill:#"+warna+";fill-opacity:"+strans2+";fill-rule:evenodd;stroke:"+aa+";stroke-width:"+stebal+";stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:"+strans+"' />";
}
/////////////////////////////////////////////////////////////////////////

function menggambar(TB,TW){
	sus();
	//mengurutkan 
	var inn=[];
	for(var i=0;i<TB.length;i++){
		inn[i]=[];
		inn[i]['id']=indeks(TB[i]);
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
	var isi='';
	var i=0;
	while(i<inn.length){
		isi+=cod(d3tod2(TB[inn[i]['no']]),TW[inn[i]['no']]);
		i++;
	}
	document.getElementById('layar').innerHTML=isi;
	
}

function tulis(ar3){
//menghasilkan isi kode array
	var isikode='';
	isikode+=("s = "+s+";\n");
	for(var i=0;i<ar3.length;i++){
		for(var j=0;j<ar3[i].length;j++){
			for(var k=0;k<ar3[i][j].length;k++){
			 ar3[i][j][k]=Math.round(ar3[i][j][k]*100/s)/100;
			}
		}
	}
	
	for(var i=0;i<ar3.length;i++){
		isikode+=("benda["+i+"] = [");
		for(var j=0;j<ar3[i].length;j++){
			isikode+=("[s*"+ar3[i][j][0]+",s*"+ar3[i][j][1]+",s*"+ar3[i][j][2]+"]");
			if(j<benda1[i].length-1){isikode+=(",");}
		}
		isikode+=("];\n");
	}
	aa='';
	for(var i=0;i<warna.length;i++){
		aa+="'"+warna[i]+"'";
		if(i<warna.length-1){aa+=",";}
	}
	aa.slice(0,8);
	isikode+=("warna = ["+aa+"];\n");
	return isikode;
}

function jumwar(ar){
//menghasilkan jumlah warna gambar
	xc=[];
	xc[xc.length]=ar[0];
	for(var i=1;i<ar.length;i++){
		ada=false;
		for(var j=0;j<xc.length;j++){
			if(ar[i]==xc[j])ada=true;
		}
		if(!ada)xc[xc.length]=ar[i];
	}
	return xc.length;
}

function jumver(ar){
//menghasilkan jumlah titik gambar
	xc=[];
	xc[xc.length]=ar[0][0];
	for(var i=0;i<ar.length;i++){
		for(var k=0;k<ar[i].length;k++){
			ada=false;
			for(var j=0;j<xc.length;j++){
				if(JSON.stringify(ar[i][k])==JSON.stringify(xc[j]))ada=true;
			}
			if(!ada)xc[xc.length]=ar[i][k];
		}
	}
	return xc.length;
}
/*
function ubah(){
	stebal=document.getElementById('aa').value;
	strans=document.getElementById('bb').value/100;
	strans2=document.getElementById('de').value/100;
	swarna=document.getElementById('cc').value;
//	document.getElementById('isisvg').value=swarna;
}
function onlo(){
	document.getElementById('isi').value=tulis(JSON.parse(JSON.stringify(benda)));
	document.getElementById('path').innerHTML=benda.length;
	document.getElementById('warna').innerHTML=jumwar(warna);
	document.getElementById('ver').innerHTML=jumver(benda);
//	document.getElementById('isisvg').innerHTML=document.getElementById('plus').innerHTML;
}

//window.onload=function(){set();setsvg();ubah();onlo();}
//window.onresize=function(){set();setsvg();}
//window.onmousemove=rotasi;
//window.onkeypress=translasi;
//*/
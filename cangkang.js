
benda=[];


function r(n){return JSON.parse(JSON.stringify(n));}

function makeCangkang(benda,mulai,tajam0,segment,putar,lebar){
//	benda=[];
	var tajam=-tajam0;
	var sudut=Math.PI*2/segment;
	var increment=lebar/segment;
	var titik=mulai;
	var tipe=2/Math.tan(tajam)*Math.sin(-tajam);
	for(var i=0;i<putar;i++){
		for(var j=0;j<segment;j++){
			if(i==0){//bagian atas
				if(j==0){
					benda[benda.length]=[[],[[ 
						[0,0,-mulai],
						[titik,0,(titik)*tipe],
						[(titik+lebar),0,(titik+lebar)*tipe]
					]]];
					
				}
				benda[benda.length]=[[],[[ 
					[0,0,-mulai],
					[titik,0,(titik)*tipe],
					[(titik+increment)*Math.cos(sudut),(titik+increment)*Math.sin(sudut),(titik+increment)*tipe]
				]]];
			}
		/*	
			benda[benda.length]=[[],[[ 
				[titik,0,(titik)*tipe],
				[titik+lebar,0,(titik+lebar)*tipe],
				[(titik+lebar+increment)*Math.cos(sudut),(titik+lebar+increment)*Math.sin(sudut),(titik+lebar+increment)*tipe],
				[(titik+increment)*Math.cos(sudut),(titik+increment)*Math.sin(sudut),(titik+increment)*tipe]
			]]];//*/
			//*
				
			benda[benda.length]=[[],[[ 
				[titik,0,(titik)*tipe],
				[titik+lebar,0,(titik+lebar)*tipe],
				[(titik+lebar+increment)*Math.cos(sudut/2),(titik+lebar+increment)*Math.sin(sudut/2),(titik+lebar/2+increment)*tipe],
				//[titik+lebar,1,(titik+lebar*0.2)*tipe+0]
			]]];
			benda[benda.length]=[[],[[ 
				[(titik+lebar+increment)*Math.cos(sudut/2),(titik+lebar+increment)*Math.sin(sudut/2),(titik+lebar/2+increment)*tipe],
				//[titik+lebar,1,(titik+lebar*0.2)*tipe+0],
				[titik+lebar,0,(titik+lebar)*tipe],
				[(titik+lebar+increment)*Math.cos(sudut),(titik+lebar+increment)*Math.sin(sudut),(titik+lebar+increment)*tipe]
			]]];
			benda[benda.length]=[[],[[ 
				[(titik+lebar+increment)*Math.cos(sudut/2),(titik+lebar+increment)*Math.sin(sudut/2),(titik+lebar/2+increment)*tipe],
				//[titik+lebar,1,(titik+lebar*0.2)*tipe+0],
				[(titik+lebar+increment)*Math.cos(sudut),(titik+lebar+increment)*Math.sin(sudut),(titik+lebar+increment)*tipe],
				[(titik+increment)*Math.cos(sudut),(titik+increment)*Math.sin(sudut),(titik+increment)*tipe]
			]]];
			benda[benda.length]=[[],[[ 
				[titik,0,(titik)*tipe],
				[(titik+lebar+increment)*Math.cos(sudut/2),(titik+lebar+increment)*Math.sin(sudut/2),(titik+lebar/2+increment)*tipe],
				//[titik+lebar,1,(titik+lebar*0.2)*tipe+0],
				[(titik+increment)*Math.cos(sudut),(titik+increment)*Math.sin(sudut),(titik+increment)*tipe]
			]]];
			
			//*/
			//*
			
			rotasi(benda,0,0,sudut);
			titik+=increment;
		}
	}
//	var dec=lebar/segment;
	for(var i=0;i<segment;i++){//bagian bawah
		var batas=(titik+lebar+increment*2);
		//*	
		benda[benda.length]=[[],[[ 
			[titik,0,(titik)*tipe],
			[titik+lebar-increment*i,0,(titik+lebar-increment*i)*tipe],
			[(titik+lebar+increment*(0-i))*Math.cos(sudut),(titik+lebar+increment*(0-i))*Math.sin(sudut),(titik+lebar+increment*(0-i))*tipe],
			[(titik+increment)*Math.cos(sudut),(titik+increment)*Math.sin(sudut),(titik+increment)*tipe]
		]]];//*/
		rotasi(benda,0,0,sudut);
		titik+=increment;
	}

	for(var i=0;i<benda.length;i++){
		benda[i][0][0]="662200";
		if(i%4==1)benda[i][0][0]="662211";
		if(i%4==2)benda[i][0][0]="662222";
		if(i%4==3)benda[i][0][0]="662233";
		//benda[i][0][0]=Math.floor(Math.random()*1000000);
		benda[i][0][1]="1";
		benda[i][0][2]="evenodd";
		benda[i][0][3]="662200";
		benda[i][0][4]="2";
		benda[i][0][5]="round";
		benda[i][0][6]="round";
		benda[i][0][7]="4";
		benda[i][0][8]="0.1";
	}
	translasi(benda,0,0,lebar*putar*1.5);
}
//makeCangkang(benda,1,-0.5,13,5,3);
//makeCangkang(benda,1,Math.PI/6,19,6,3);
makeCangkang(benda,1,Math.PI/7,15,4,3);

dilatasi(benda,0.1,0.1,0.1);
//translasi(benda,0,0,-1);
rotasi(benda,-Math.PI/2,0,0);
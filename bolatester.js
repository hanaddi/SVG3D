s=1;
benda=[];

tot=16;	//harus genap (segmen)

tot=tot-tot%2;
for(var i=0;i<tot;i++){
	for(var j=0;j<tot/2;j++){
		var idx=benda.length;
		benda[idx]=[];
		benda[idx][0]=[];
		//benda[idx][0][0]=Math.floor(Math.random()*1000000);
		benda[idx][0][0]="ff0000";
		benda[idx][0][1]="0.8";
		benda[idx][0][2]="evenodd";
		benda[idx][0][3]="660000";
		benda[idx][0][4]="1";
		benda[idx][0][5]="round";
		benda[idx][0][6]="round";
		benda[idx][0][7]="4";
		benda[idx][0][8]="0";
		

		su=Math.PI*2/tot;
		benda[idx][1]=[[
		[s*Math.sin(su*(j+1))*Math.sin(su),s*Math.cos(su*(j+1)),s*Math.cos(su)*Math.sin(su*(j+1))],
		[s*Math.sin(su*(j))*Math.sin(su),s*Math.cos(su*(j)),s*Math.cos(su)*Math.sin(su*(j))],
		[0,s*Math.cos(su*j),s*Math.sin(su*j)],
		[0,s*Math.cos(su*(j+1)),s*Math.sin(su*(j+1))]
		]];
		
		//benda[idx][2]=' onmouseover="this.style.fill=\'#0000ff\';this.style.stroke=\'#0000ff\';"'+
		' onmouseout="this.style.fill=\'#'+benda[idx][0][0]+'\';this.style.stroke=\'#'+benda[idx][0][3]+'\';" ';
		//benda[idx][2]=' onmouseover="for(var a=0;a<benda.length;a++){if(benda[a][0][0]==\'770000\')benda1[a][0][0]=\'00ff00\';menggambar(benda1)}" onmouseout="this.style.fill=\'#'+benda[idx][0][0]+'\'" ';
	
	}
	rotasi(benda,0,su,0);
}
//dilatasi(benda,1,3,1);
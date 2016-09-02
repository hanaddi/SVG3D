s=135;
benda=[];

var n1=[];
n1[0]=[0,s*0.57,s*-0.74];
n1[1]=[0,0,s*-0.41];
n1[2]=[s*0.54,s*0.41,s*-0.3];
n1[3]=[s*0.65,s*0.44,s*-0.09];
n1[4]=[s*0.44,s*-0.41,s*-0.30];
n1[5]=[s*0.58,s*0.07,s*0.66];
n1[6]=[s*0.61,s*-0.61,s*0.44];
n1[7]=[s*0.57,s*-0.5,s*0.86];
n1[8]=[s*0.73,s*0.07,s*1.06];
n1[9]=[s*0.97,s*-0.5,s*1.32];
n1[10]=[s*1.26,s*0.07,s*1.45];
n1[11]=[s*1.6,s*-0.58,s*1.61];
n1[12]=[s*1.92,s*0.33,s*0.96];
//n1[13]=[s*0.97,s*-0.5,s*1.32];
//n1[14]=[s*0.97,s*-0.5,s*1.32];
//n1[15]=[s*0.97,s*-0.5,s*1.32];
//n1[16]=[s*0.97,s*-0.5,s*1.32];
//n1[17]=[s*0.97,s*-0.5,s*1.32];
//n1[18]=[s*0.97,s*-0.5,s*1.32];
//n1[19]=[s*0.97,s*-0.5,s*1.32];

for(var i=0;i<1;i++){
//	benda[0][0]=[];
	var n=JSON.parse(JSON.stringify(n1));
	
	benda[benda.length]=[[],[[n[0],n[1],n[2] ]]];
	benda[benda.length]=[[],[[n[4],n[1],n[2] ]]];
	benda[benda.length]=[[],[[n[4],n[3],n[2] ]]];
	benda[benda.length]=[[],[[n[4],n[3],n[6] ]]];
	benda[benda.length]=[[],[[n[7],n[3],n[6] ]]];
	benda[benda.length]=[[],[[n[7],n[3],n[5] ]]];
	benda[benda.length]=[[],[[n[7],n[8],n[5] ]]];
	benda[benda.length]=[[],[[n[7],n[8],n[9] ]]];
	benda[benda.length]=[[],[[n[10],n[8],n[9] ]]];
	benda[benda.length]=[[],[[n[10],n[11],n[9] ]]];
	benda[benda.length]=[[],[[n[10],n[11],n[12] ]]];
	
	
//	dilatasi(benda,1,1,1);
}

for(var i=0;i<benda.length;i++){
	benda[i][0][0]="010101";
//benda[i][0][0]=Math.floor(Math.random()*1000000);
	benda[i][0][1]="0.9";
	benda[i][0][2]="evenodd";
	benda[i][0][3]="000000";
	benda[i][0][4]="1";
	benda[i][0][5]="round";
	benda[i][0][6]="round";
	benda[i][0][7]="4";
	benda[i][0][8]="1";
}
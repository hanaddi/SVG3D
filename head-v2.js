s=435;
benda=[];

var n1=[];
n1[0]=[0,s*-0.11,s*0.85];
n1[1]=[0,s*-0.12,s*0.86];
n1[2]=[s*0.01,s*-0.11,s*0.85];
n1[3]=[s*0.01,s*-0.11,s*0.86];
n1[4]=[s*0.0,s*-0.10,s*0.88];
n1[5]=[s*0.01,s*-0.10,s*0.88];

for(var i=0;i<1;i++){
//	benda[0][0]=[];
	var n=JSON.parse(JSON.stringify(n1));
	
	benda[benda.length]=[[],[[n[0],n[1],n[3],n[2] ]]];
	benda[benda.length]=[[],[[n[4],n[5],n[3],n[1] ]]];
//	benda[benda.length]=[[],[[n[4],n[1],n[2] ]]];
//	benda[benda.length]=[[],[[n[4],n[3],n[2] ]]];
	
	
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
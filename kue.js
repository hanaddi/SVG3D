
	s=45;
	a=0;

	for(var j=0;j<12;j++){
		benda[benda.length]=[[s*1.4*Math.cos(Math.PI/180*10),0,s*1.4*Math.sin(Math.PI/180*10)],[s*1.4*Math.cos(Math.PI/180*20),0,s*1.4*Math.sin(Math.PI/180*20)],
		[s*1.5*Math.cos(Math.PI/180*20),0,s*1.5*Math.sin(Math.PI/180*20)],[s*1.5*Math.cos(Math.PI/180*10),0,s*1.5*Math.sin(Math.PI/180*10)]];
		warna[warna.length]='654624';
		a=warna.length;
		
		benda[benda.length]=[[0,0,0],[2*s,0,0],[s*2.25*Math.cos(Math.PI/180*10),0,s*2.25*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[0,0,0],[s*1.4*Math.cos(Math.PI/180*20),0,s*1.4*Math.sin(Math.PI/180*20)],[s*1.4*Math.cos(Math.PI/180*10),0,s*1.4*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[0,0,0],[s*2.25*Math.cos(Math.PI/180*20),0,s*2.25*Math.sin(Math.PI/180*20)],[s*2*Math.cos(Math.PI/180*30),0,s*2*Math.sin(Math.PI/180*30)]];

		benda[benda.length]=[[s*1.5*Math.cos(Math.PI/180*10),0,s*1.5*Math.sin(Math.PI/180*10)],[s*1.5*Math.cos(Math.PI/180*20),0,s*1.5*Math.sin(Math.PI/180*20)],
		[s*2.25*Math.cos(Math.PI/180*20),0,s*2.25*Math.sin(Math.PI/180*20)],[s*2.25*Math.cos(Math.PI/180*10),0,s*2.25*Math.sin(Math.PI/180*10)]];
		
		for(var i=a;i<benda.length;i++){
			warna[warna.length]='e9c982';
		}
		a=benda.length;
		
		benda[benda.length]=[[s*2.5*Math.cos(Math.PI/180*10),-0.25*s,s*2.5*Math.sin(Math.PI/180*10)],[s*2.25,-0.25*s,0],[2*s,0,0],
			[s*2.25*Math.cos(Math.PI/180*10),0,s*2.25*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*2.5*Math.cos(Math.PI/180*20),0.25*-s,s*2.5*Math.sin(Math.PI/180*20)],[s*2.5*Math.cos(Math.PI/180*10),0.25*-s,s*2.5*Math.sin(Math.PI/180*10)],
			[s*2.25*Math.cos(Math.PI/180*10),0,s*2.25*Math.sin(Math.PI/180*10)],[s*2.25*Math.cos(Math.PI/180*20),0,s*2.25*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*2.25*Math.cos(Math.PI/180*30),0.25*-s,s*2.25*Math.sin(Math.PI/180*30)],[s*2.5*Math.cos(Math.PI/180*20),0.25*-s,s*2.5*Math.sin(Math.PI/180*20)],
			[s*2.25*Math.cos(Math.PI/180*20),0,s*2.25*Math.sin(Math.PI/180*20)],[s*2*Math.cos(Math.PI/180*30),0,s*2*Math.sin(Math.PI/180*30)]];
			
		benda[benda.length]=[[s*2.5*Math.cos(Math.PI/180*10),-0.25*s,s*2.5*Math.sin(Math.PI/180*10)],[s*2.25,-0.25*s,0],[2.5*s,-0.25*s,0],
			[s*2.75*Math.cos(Math.PI/180*10),-0.25*s,s*2.75*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*2.75*Math.cos(Math.PI/180*20),0.25*-s,s*2.75*Math.sin(Math.PI/180*20)],[s*2.75*Math.cos(Math.PI/180*10),0.25*-s,s*2.75*Math.sin(Math.PI/180*10)],
			[s*2.5*Math.cos(Math.PI/180*10),-0.25*s,s*2.5*Math.sin(Math.PI/180*10)],[s*2.5*Math.cos(Math.PI/180*20),-0.25*s,s*2.5*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*2.5*Math.cos(Math.PI/180*30),0.25*-s,s*2.5*Math.sin(Math.PI/180*30)],[s*2.75*Math.cos(Math.PI/180*20),0.25*-s,s*2.75*Math.sin(Math.PI/180*20)],
			[s*2.5*Math.cos(Math.PI/180*20),0.25*-s,s*2.5*Math.sin(Math.PI/180*20)],[s*2.25*Math.cos(Math.PI/180*30),0.25*-s,s*2.25*Math.sin(Math.PI/180*30)]];
			
		benda[benda.length]=[[s*3*Math.cos(Math.PI/180*10),0,s*3*Math.sin(Math.PI/180*10)],[s*2.75,0,0],[2.5*s,-0.25*s,0],
			[s*2.75*Math.cos(Math.PI/180*10),-0.25*s,s*2.75*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*2.75*Math.cos(Math.PI/180*20),0.25*-s,s*2.75*Math.sin(Math.PI/180*20)],[s*2.75*Math.cos(Math.PI/180*10),0.25*-s,s*2.75*Math.sin(Math.PI/180*10)],
			[s*3*Math.cos(Math.PI/180*10),0,s*3*Math.sin(Math.PI/180*10)],[s*3*Math.cos(Math.PI/180*20),0,s*3*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*2.5*Math.cos(Math.PI/180*30),0.25*-s,s*2.5*Math.sin(Math.PI/180*30)],[s*2.75*Math.cos(Math.PI/180*20),0.25*-s,s*2.75*Math.sin(Math.PI/180*20)],
			[s*3*Math.cos(Math.PI/180*20),0,s*3*Math.sin(Math.PI/180*20)],[s*2.75*Math.cos(Math.PI/180*30),0,s*2.75*Math.sin(Math.PI/180*30)]];
		
		benda[benda.length]=[[s*3*Math.cos(Math.PI/180*10),0,s*3*Math.sin(Math.PI/180*10)],[s*2.75,0,0],[2.75*s,0.25*s,0],
			[s*3*Math.cos(Math.PI/180*10),0.25*s,s*3*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*3*Math.cos(Math.PI/180*20),0.25*s,s*3*Math.sin(Math.PI/180*20)],[s*3*Math.cos(Math.PI/180*10),0.25*s,s*3*Math.sin(Math.PI/180*10)],
			[s*3*Math.cos(Math.PI/180*10),0,s*3*Math.sin(Math.PI/180*10)],[s*3*Math.cos(Math.PI/180*20),0,s*3*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*2.75*Math.cos(Math.PI/180*30),0.25*s,s*2.75*Math.sin(Math.PI/180*30)],[s*3*Math.cos(Math.PI/180*20),0.25*s,s*3*Math.sin(Math.PI/180*20)],
			[s*3*Math.cos(Math.PI/180*20),0,s*3*Math.sin(Math.PI/180*20)],[s*2.75*Math.cos(Math.PI/180*30),0,s*2.75*Math.sin(Math.PI/180*30)]];
			
		benda[benda.length]=[[s*3*Math.cos(Math.PI/180*10),0.25*s,s*3*Math.sin(Math.PI/180*10)],[s*2.75,0.25*s,0],[2.5*s,0.5*s,0],
			[s*2.75*Math.cos(Math.PI/180*10),0.5*s,s*2.75*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*2.75*Math.cos(Math.PI/180*20),0.5*s,s*2.75*Math.sin(Math.PI/180*20)],[s*2.75*Math.cos(Math.PI/180*10),0.5*s,s*2.75*Math.sin(Math.PI/180*10)],
			[s*3*Math.cos(Math.PI/180*10),0.25*s,s*3*Math.sin(Math.PI/180*10)],[s*3*Math.cos(Math.PI/180*20),0.25*s,s*3*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*2.5*Math.cos(Math.PI/180*30),0.5*s,s*2.5*Math.sin(Math.PI/180*30)],[s*2.75*Math.cos(Math.PI/180*20),0.5*s,s*2.75*Math.sin(Math.PI/180*20)],
			[s*3*Math.cos(Math.PI/180*20),0.25*s,s*3*Math.sin(Math.PI/180*20)],[s*2.75*Math.cos(Math.PI/180*30),0.25*s,s*2.75*Math.sin(Math.PI/180*30)]];
		
		for(var i=a;i<benda.length;i++){
			warna[warna.length]='67501b';
		}
		a=benda.length;
				
		benda[benda.length]=[[s*2.75*Math.cos(Math.PI/180*10),2*s,s*2.75*Math.sin(Math.PI/180*10)],[s*2.5,2*s,0],[2.5*s,0.5*s,0],
			[s*2.75*Math.cos(Math.PI/180*10),0.5*s,s*2.75*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*2.75*Math.cos(Math.PI/180*20),0.5*s,s*2.75*Math.sin(Math.PI/180*20)],[s*2.75*Math.cos(Math.PI/180*10),0.5*s,s*2.75*Math.sin(Math.PI/180*10)],
			[s*2.75*Math.cos(Math.PI/180*10),2*s,s*2.75*Math.sin(Math.PI/180*10)],[s*2.75*Math.cos(Math.PI/180*20),2*s,s*2.75*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*2.5*Math.cos(Math.PI/180*30),0.5*s,s*2.5*Math.sin(Math.PI/180*30)],[s*2.75*Math.cos(Math.PI/180*20),0.5*s,s*2.75*Math.sin(Math.PI/180*20)],
			[s*2.75*Math.cos(Math.PI/180*20),2*s,s*2.75*Math.sin(Math.PI/180*20)],[s*2.5*Math.cos(Math.PI/180*30),2*s,s*2.5*Math.sin(Math.PI/180*30)]];
		
		for(var i=a;i<benda.length;i++){
			warna[warna.length]='e9c982';
		}
		a=benda.length;
				
		benda[benda.length]=[[s*2.75*Math.cos(Math.PI/180*10),2*s,s*2.75*Math.sin(Math.PI/180*10)],[s*2.5,2*s,0],[3.5*s,2*s,0],
			[s*3.5*Math.cos(Math.PI/180*10),2*s,s*3.5*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*3.5*Math.cos(Math.PI/180*20),2*s,s*3.5*Math.sin(Math.PI/180*20)],[s*3.5*Math.cos(Math.PI/180*10),2*s,s*3.5*Math.sin(Math.PI/180*10)],
			[s*2.75*Math.cos(Math.PI/180*10),2*s,s*2.75*Math.sin(Math.PI/180*10)],[s*2.75*Math.cos(Math.PI/180*20),2*s,s*2.75*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*3.5*Math.cos(Math.PI/180*30),2*s,s*3.5*Math.sin(Math.PI/180*30)],[s*3.5*Math.cos(Math.PI/180*20),2*s,s*3.5*Math.sin(Math.PI/180*20)],
			[s*2.75*Math.cos(Math.PI/180*20),2*s,s*2.75*Math.sin(Math.PI/180*20)],[s*2.5*Math.cos(Math.PI/180*30),2*s,s*2.5*Math.sin(Math.PI/180*30)]];
				
		benda[benda.length]=[[0,2*s,0],[3.5*s,2*s,0],
			[s*3.5*Math.cos(Math.PI/180*10),2*s,s*3.5*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*3.5*Math.cos(Math.PI/180*20),2*s,s*3.5*Math.sin(Math.PI/180*20)],[s*3.5*Math.cos(Math.PI/180*10),2*s,s*3.5*Math.sin(Math.PI/180*10)],
			[0,2*s,0]];
		benda[benda.length]=[[s*3.5*Math.cos(Math.PI/180*30),2*s,s*3.5*Math.sin(Math.PI/180*30)],[s*3.5*Math.cos(Math.PI/180*20),2*s,s*3.5*Math.sin(Math.PI/180*20)],
			[0,2*s,0]];
				
		benda[benda.length]=[[s*3.75*Math.cos(Math.PI/180*10),1.8*s,s*3.75*Math.sin(Math.PI/180*10)],[s*3.75,1.8*s,0],[3.5*s,2*s,0],
			[s*3.5*Math.cos(Math.PI/180*10),2*s,s*3.5*Math.sin(Math.PI/180*10)]];
		benda[benda.length]=[[s*3.5*Math.cos(Math.PI/180*20),2*s,s*3.5*Math.sin(Math.PI/180*20)],[s*3.5*Math.cos(Math.PI/180*10),2*s,s*3.5*Math.sin(Math.PI/180*10)],
			[s*3.75*Math.cos(Math.PI/180*10),1.8*s,s*3.75*Math.sin(Math.PI/180*10)],[s*3.75*Math.cos(Math.PI/180*20),1.8*s,s*3.75*Math.sin(Math.PI/180*20)]];
		benda[benda.length]=[[s*3.5*Math.cos(Math.PI/180*30),2*s,s*3.5*Math.sin(Math.PI/180*30)],[s*3.5*Math.cos(Math.PI/180*20),2*s,s*3.5*Math.sin(Math.PI/180*20)],
			[s*3.75*Math.cos(Math.PI/180*20),1.8*s,s*3.75*Math.sin(Math.PI/180*20)],[s*3.75*Math.cos(Math.PI/180*30),1.8*s,s*3.75*Math.sin(Math.PI/180*30)]];
		
		
		for(var i=a;i<benda.length;i++){
			warna[warna.length]='ffffff';
		}
		a=benda.length;
		
		rotZ(benda,Math.PI/180*30,2,0);
	}

	traZ(benda,0,-50,0);
//	warna=['f9c982'];	

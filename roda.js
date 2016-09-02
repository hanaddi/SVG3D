
	s=15;
	ss=Math.sin(Math.PI/180*36);
	cc=Math.cos(Math.PI/180*36);
	ss1=Math.sin(Math.PI/180*18);
	cc1=Math.cos(Math.PI/180*18);
	a=0;

//KERANGKA RODA
	for(var i=0;i<5;i++){
		// 1/5 BAGIAN KANAN DEPAN
		benda[benda.length]=[[0,0,s],[0,3*s,0.5*s],[s,s*Math.sqrt(8),0]];
		benda[benda.length]=[[0,0,s],[s,s*Math.sqrt(8),0],[3*ss*s,3*cc*s,0]];
		benda[benda.length]=[[0,3*s,0.5*s],[s,s*Math.sqrt(8),0],[0,9*s,0]];
		benda[benda.length]=[[s,s*Math.sqrt(8),0],[0,9*s,0],[s,s*Math.sqrt(80),0]];
		benda[benda.length]=[[0,9*s,0],[s,s*Math.sqrt(80),0],[0,10*s,0]];
		benda[benda.length]=[[s,s*Math.sqrt(80),0],[0,10*s,0],[s,s*Math.sqrt(99),0]];
		benda[benda.length]=[[s,s*Math.sqrt(80),0],[9*ss*s,9*cc*s,0],[s,s*Math.sqrt(99),0]];
		benda[benda.length]=[[9*ss*s,9*cc*s,0],[s,s*Math.sqrt(99),0],[10*ss*s,10*cc*s,0]];
		
		// 1/5 BAGIAN KANAN BELAKANG
		benda[benda.length]=[[0,0,2*s],[0,3*s,2*s],[s,s*Math.sqrt(8),2*s]];
		benda[benda.length]=[[0,0,2*s],[s,s*Math.sqrt(8),2*s],[3*ss*s,3*cc*s,2*s]];
		benda[benda.length]=[[0,3*s,s],[s,s*Math.sqrt(8),s],[0,9*s,s]];
		benda[benda.length]=[[s,s*Math.sqrt(8),s],[0,9*s,s],[s,s*Math.sqrt(80),s]];
		benda[benda.length]=[[0,9*s,3*s],[s,s*Math.sqrt(80),3*s],[0,10*s,3*s]];
		benda[benda.length]=[[s,s*Math.sqrt(80),3*s],[0,10*s,3*s],[s,s*Math.sqrt(99),3*s]];
		benda[benda.length]=[[s,s*Math.sqrt(80),3*s],[9*ss*s,9*cc*s,3*s],[s,s*Math.sqrt(99),3*s]];
		benda[benda.length]=[[9*ss*s,9*cc*s,3*s],[s,s*Math.sqrt(99),3*s],[10*ss*s,10*cc*s,3*s]];
		
		// 1/5 PENGHUBUNG BAGIAN KANAN
		benda[benda.length]=[[s,s*Math.sqrt(8),s],[0,3*s,s],[0,3*s,2*s],[s,s*Math.sqrt(8),2*s]];
		benda[benda.length]=[[3*ss*s,3*cc*s,0],[s,s*Math.sqrt(8),0],[s,s*Math.sqrt(8),2*s],[3*ss*s,3*cc*s,2*s]];
		benda[benda.length]=[[s,s*Math.sqrt(8),s],[s,s*Math.sqrt(80),s],[s,s*Math.sqrt(80),0],[s,s*Math.sqrt(8),0]];
		benda[benda.length]=[[0,9*s,3*s],[s,s*Math.sqrt(80),3*s],[s,s*Math.sqrt(80),s],[0,9*s,s]];
		benda[benda.length]=[[s,s*Math.sqrt(80),3*s],[9*ss*s,9*cc*s,3*s],[9*ss*s,9*cc*s,0],[s,s*Math.sqrt(80),0]];
		
		
		// 1/5 BAGIAN KIRI
		benda[benda.length]=[[0,0,s],[0,3*s,0.5*s],[-s,s*Math.sqrt(8),0]];
		benda[benda.length]=[[0,0,s],[-s,s*Math.sqrt(8),0],[-3*ss*s,3*cc*s,0]];
		benda[benda.length]=[[0,3*s,0.5*s],[-s,s*Math.sqrt(8),0],[0,9*s,0]];
		benda[benda.length]=[[-s,s*Math.sqrt(8),0],[0,9*s,0],[-s,s*Math.sqrt(80),0]];
		benda[benda.length]=[[0,9*s,0],[-s,s*Math.sqrt(80),0],[0,10*s,0]];
		benda[benda.length]=[[-s,s*Math.sqrt(80),0],[0,10*s,0],[-s,s*Math.sqrt(99),0]];
		benda[benda.length]=[[-s,s*Math.sqrt(80),0],[-9*ss*s,9*cc*s,0],[-s,s*Math.sqrt(99),0]];
		benda[benda.length]=[[-9*ss*s,9*cc*s,0],[-s,s*Math.sqrt(99),0],[-10*ss*s,10*cc*s,0]];
		
		// 1/5 BAGIAN KIRI BELAKANG
		benda[benda.length]=[[0,0,2*s],[0,3*s,2*s],[-s,s*Math.sqrt(8),2*s]];
		benda[benda.length]=[[0,0,2*s],[-s,s*Math.sqrt(8),2*s],[-3*ss*s,3*cc*s,2*s]];
		benda[benda.length]=[[0,3*s,s],[-s,s*Math.sqrt(8),s],[0,9*s,s]];
		benda[benda.length]=[[-s,s*Math.sqrt(8),s],[0,9*s,s],[-s,s*Math.sqrt(80),s]];
		benda[benda.length]=[[0,9*s,3*s],[-s,s*Math.sqrt(80),3*s],[0,10*s,3*s]];
		benda[benda.length]=[[-s,s*Math.sqrt(80),3*s],[0,10*s,3*s],[-s,s*Math.sqrt(99),3*s]];
		benda[benda.length]=[[-s,s*Math.sqrt(80),3*s],[-9*ss*s,9*cc*s,3*s],[-s,s*Math.sqrt(99),3*s]];
		benda[benda.length]=[[-9*ss*s,9*cc*s,3*s],[-s,s*Math.sqrt(99),3*s],[-10*ss*s,10*cc*s,3*s]];
		
		// 1/5 PENGHUBUNG BAGIAN KIRI
		benda[benda.length]=[[-s,s*Math.sqrt(8),s],[0,3*s,s],[0,3*s,2*s],[-s,s*Math.sqrt(8),2*s]];
		benda[benda.length]=[[-3*ss*s,3*cc*s,0],[-s,s*Math.sqrt(8),0],[-s,s*Math.sqrt(8),2*s],[-3*ss*s,3*cc*s,2*s]];
		benda[benda.length]=[[-s,s*Math.sqrt(8),s],[-s,s*Math.sqrt(80),s],[-s,s*Math.sqrt(80),0],[-s,s*Math.sqrt(8),0]];
		benda[benda.length]=[[0,9*s,3*s],[-s,s*Math.sqrt(80),3*s],[-s,s*Math.sqrt(80),s],[0,9*s,s]];
		benda[benda.length]=[[-s,s*Math.sqrt(80),3*s],[-9*ss*s,9*cc*s,3*s],[-9*ss*s,9*cc*s,0],[-s,s*Math.sqrt(80),0]];

		rotZ(benda,Math.PI/180*72,0,1);
	}	
	for (var i=a;i<benda.length;i++){
		warna[warna.length]=['aabbcc'];
	}
	a=benda.length*1;

//BAN
	for(var i=0;i<5;i++){

		for(var k=0;k<2;k++){
			for(var j=0;j<2;j++){//DEPAN BELAKANG
				benda[benda.length]=[[0,10*s,0],[s,s*Math.sqrt(99),0],[s*11*ss1,s*11*cc1,-0.5*s],[0,11*s,-0.5*s]];//ATAS
				benda[benda.length]=[[s,s*Math.sqrt(99),0],[10*ss*s,10*cc*s,0],[11*ss*s,11*cc*s,-0.5*s],[s*11*ss1,s*11*cc1,-0.5*s]];//ATAS
				benda[benda.length]=[[0,13*s,-0.5*s],[s*13*ss1,s*13*cc1,-0.5*s],[s*11*ss1,s*11*cc1,-0.5*s],[0,11*s,-0.5*s]];//TANGAH
				benda[benda.length]=[[s*13*ss1,s*13*cc1,-0.5*s],[13*ss*s,13*cc*s,-0.5*s],[11*ss*s,11*cc*s,-0.5*s],[s*11*ss1,s*11*cc1,-0.5*s]];//TENGAH
				benda[benda.length]=[[0,13*s,-0.5*s],[s*13*ss1,s*13*cc1,-0.5*s],[s*14*ss1,s*14*cc1,0],[0,14*s,0]];//BAWAH
				benda[benda.length]=[[s*13*ss1,s*13*cc1,-0.5*s],[13*ss*s,13*cc*s,-0.5*s],[14*ss*s,14*cc*s,0],[s*14*ss1,s*14*cc1,0]];//BAWAH
				benda[benda.length]=[[0,14*s,1.5*s],[s*14*ss1,s*14*cc1,1.5*s],[s*14*ss1,s*14*cc1,0],[0,14*s,0]];//ALAS
				benda[benda.length]=[[s*14*ss1,s*14*cc1,1.5*s],[14*ss*s,14*cc*s,1.5*s],[14*ss*s,14*cc*s,0],[s*14*ss1,s*14*cc1,0]];//ALAS
				
				if (j==0){
					traZ(benda,0,0,-1.5*s);
					dilZ(benda,1,1,-1);
					traZ(benda,0,0,1.5*s);
				}
			}
			
			if (k==0){
				//traZ(benda,0,0,-1.5*s);
				dilZ(benda,-1,1,1);
				//traZ(benda,0,0,1.5*s);
			}
		}
		dilZ(benda,-1,1,1);
	
		rotZ(benda,Math.PI/180*72,0,1);
	}
	for (var i=a;i<benda.length;i++){
		warna[warna.length]=['000011'];
	}
	a=benda.length*1;
	dilZ(benda,1,1,2);
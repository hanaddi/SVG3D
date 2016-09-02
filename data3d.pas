program d3;
var
	data:text;
	nama:string;
	j,i,idbatas:longint;
	isi:array[0..1000000]of string;

	
begin
	//membaca data
	write('Nama File :');
	readln(nama);
	assign(data,nama+'.txt');
	reset(data);
	i:=0;
	while not eof(data) do
	begin
		readln(data,isi[i]);
		inc(i);
	end;
	close(data);
	
	//edit file
	for j:=0 to i do
		if(isi[j]='|') then
		begin
			idbatas:=j;
			isi[j]:='; var sisi='
		end;
			
	for j:=0 to i do
	begin
		if(isi[j]='(') then
			isi[j]:='['
		else if(isi[j]=')') then
			isi[j]:=']';
	end;
	
	for j:=idbatas+1 to i do
	begin
		if(isi[j]='[' )and( isi[j+1]<>'[') then
			isi[j]:='[nod['
		else if(isi[j]=',' )and( isi[j-1]<>']') then
			isi[j]:='],nod['
		else if(isi[j]=',' )and( isi[j-1]=']') then
			isi[j]:='],'
		else if(isi[j]=']' )and( isi[j+1]=']') then
			isi[j]:=']]';
	end;
	
	//menulis
	assign(data,nama+'.js');
	rewrite(data);
	write(data,'var nod=');
	for j:=0 to i do
		write(data,isi[j]);
	writeln(data,';');
	writeln(data,'benda=[];');
	writeln(data,'for(var i=0;i<sisi.length;i++){	benda[benda.length]=[[],[JSON.parse(JSON.stringify(sisi))[i]]];}');
	writeln(data,
	'for(var i=0;i<benda.length;i++){'+
	'	benda[i][0][0]="224400";'+
	'	benda[i][0][1]="1";'+
	'	benda[i][0][2]="evenodd";'+
	'	benda[i][0][3]="662200";'+
	'	benda[i][0][4]="2";'+
	'	benda[i][0][5]="round";'+
	'	benda[i][0][6]="round";'+
	'	benda[i][0][7]="4";'+
	'	benda[i][0][8]="0.1";}');
	close(data);
	writeln('selesai.');
	readln();
end.
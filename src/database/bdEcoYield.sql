create database if not exists ecoyield;
use ecoyield;

create table empresa(
	id int primary key auto_increment,
	nome varchar(50) not null,
	cnpj varchar(18) not null,
	chaveAcesso char(10) not null,
	cep char(9) not null
);

create table funcionario(
id int primary key auto_increment, 
nome varchar(30) not null,
sobrenome varchar(30) not null,
rg char(12) not null,
cpf char(14) not null,
email varchar(60) not null,
senha varchar(20) not null,
fkempresa int not null,
constraint funcionario_empresa_fk foreign key(fkempresa) references empresa(id)
);

create table departamento(
	id int primary key auto_increment,
    nome varchar(45) not null,
    
    constraint uk_nome unique key (nome)
);

create table sensor(
id int primary key auto_increment,
tipo varchar(5) not null,
constraint chk_tipo check(tipo in('LM35', 'DHT11'))
);

create table conjuntoSensor(
	id int primary key auto_increment,
    fkempresa int not null,
    fksensorTemperatura int not null,
    fksensorUmidade int not null,
	numeroConjunto int,
    fkdepartamento int not null,
    
    constraint conjuntoSensor_sensorTemperatura_fk foreign key (fksensorTemperatura) references sensor(id),
    constraint conjuntoSensor_sensorUmidade_fk foreign key (fksensorUmidade) references sensor(id),
    constraint conjuntoSensor_empresa_fk foreign key (fkempresa) references empresa(id),
    constraint conjuntoSensor_departamento_fk foreign key (fkdepartamento) references departamento(id),
    constraint uk_fksensorTemperatura unique key (fksensorTemperatura),
    constraint uk_fksensorUmidade unique key (fksensorUmidade)
);

create table leitura(
id int primary key auto_increment,
temperatura decimal(4,2) not null,
umidade decimal(4,2) not null,
dtHora NOT NULL DEFAULT CURRENT_TIMESTAMP(),
fkconjuntoSensor int,
constraint leitura_conjunto_fk foreign key (fkconjuntoSensor) references conjuntoSensor(id),
);

insert into empresa(nome, cnpj, chaveAcesso, cep) 
values ('ByteWorks Tech', '81.036.863/0001-10', 'K4hT9fR7pE', '04673-040'),
	('CodeGenius Solutions', '65.915.538/0001-71', 'x2G5sP3qA7', '09435-130'),
	('TechVision Innovations', '73.213.903/0001-24', 'M8jN6wT0zY', '02851-010'),
	('NexusSoft Labs', '12.084.714/0001-04', 'R3fX9uS1vQ', '16070-201'),
	('DigitalEdge Technologies', '63.848.741/0001-47', 'Y5dK1mH8oL', '02243-020');
    
insert into funcionario(nome, sobrenome, rg, cpf, email, senha, fkempresa)
values ('Lorena', 'Garcia', '9876543-2', '987.654.321-00', 'lorena.garcia@email.com', 'passL0r3n@', 3),
	('Lucas', 'Ribeiro', '1122334-5', '112.233.445-56', 'lucas.ribeiro@email.com', 'lRiB#4321', 1),
	('Isabela', 'Martins', '7788990-1', '778.899.011-22', 'isabela.martins@email.com', 'Martins@123', 4),
	('Diego', 'Nogueira', '3344556-7', '334.455.667-78', 'diego.nogueira@email.com', 'N0gueir@D1eg0', 2),	
	('Juliana', 'Pereira', '5566778-9', '556.677.889-90', 'juliana.pereira@email.com', 'Juli@123', 5),
	('Ricardo', 'Almeida', '9900112-3', '990.011.223-34', 'ricardo.almeida@email.com', 'Alm#1122', 1);
    
insert into departamento(nome)
values ('Administrativo'),
		('Financeiro'),
		('TI'),
		('RH'),
		('Produção');
    
insert into sensor(tipo)
values ('DHT11'),
	('LM35'),
	('DHT11'),
	('LM35'),
	('DHT11'),
	('LM35'),
	('DHT11'),
	('LM35'),
	('DHT11'),
	('LM35'),
	('DHT11'),
	('LM35');

create table simuladorLeitura(
id int primary key auto_increment,
temperatura decimal(4,2),
umidade decimal(4,2),
dtHora timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
fkconjuntoSensor int
);

select * from empresa;
select * from funcionario;
select * from departamento;
select * from sensor;
select * from conjuntoSensor;
select * from leitura;	
select * from simuladorLeitura;	
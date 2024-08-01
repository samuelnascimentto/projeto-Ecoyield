use ecoyield;

Create table mediaMensal (
id int auto_increment primary key,
mes varchar(45),
ano int,
temperatura varchar(45),
umidade varchar(45)
);

INSERT INTO mediaMensal (mes, ano, temperatura, umidade) 
VALUES 
    ('Janeiro', 2024, 25.5, 60.2),
    ('Fevereiro', 2024, 26.3, 58.7),
    ('Março', 2024, 27.1, 62.0),
    ('Abril', 2024, 28.0, 65.5),
    ('Maio', 2024,23.4, 60.8),
    ('Junho', 2024, 25.9, 63.7);
    
    

create table dadosCapturados (
id int auto_increment primary key,
dataCaptura timestamp not null,
temperatura decimal(5,2),
umidade decimal(5,2)
);

INSERT INTO dadosCapturados (dataCaptura, temperatura, umidade) 
values
    (NOW() - interval 10 minute, 25.7, 59.8), 
    (NOW() - interval 20 minute, 25.9, 59.5), 
    (NOW() - interval 30 minute, 26.1, 59.2),
    (NOW() - interval 40 minute, 26.6, 59.2),
    (NOW() - interval 50 minute, 26.5, 59.2),
    (NOW() - interval 60 minute, 26.4, 60.2);
    
      select * from mediaMensal;
    select * from dadosCapturados;
  




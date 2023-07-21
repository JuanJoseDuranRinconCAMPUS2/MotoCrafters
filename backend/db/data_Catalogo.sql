-- Active: 1688561253892@@127.0.0.1@5501@db_motocrafters_sql
/* Seleccionamos la base de datos */

USE db_MotoCrafters_sql;

/* Insercion de data a la base de datos de las marcas de motocicletas de AUTECO MOBILITY */
INSERT INTO Marca (Mrc_Nombre) VALUES
    ('Victory'),
    ('Benelli'),
    ('Kawasaki'),
    ('Kymco');

/* Insercion de data a la base de datos de los tipos de motocicletas de AUTECO MOBILITY */
INSERT INTO Tipo_Motocicleta (Tpo_Nombre) VALUES
    ('Urbanas'),
    ('Deportivas'),
    ('Todo Terreno'),
    ('Automáticas'),
    ('Semiautomáticas'),
    ('Alta Gama'),
    ('Touring'),
    ('Heritage');

/* Insercion de data a la base de datos de las categorias de motocicletas de AUTECO MOBILITY */
INSERT INTO Categoria_Motocicleta (Cat_Nombre) VALUES
    ('De Carretera'),
    ('Scooters'),
    ('Maxiscooters');

/* Insercion de data a la base de datos de los colores disponibles de motocicletas de AUTECO MOBILITY */
INSERT INTO Colores (Cl_DisColores) VALUES
    ('{"Color1": "azul", "Color2": "gris"}'),
    ('{"Color1": "blanco", "Color2": "gris", "Color3": "Negro plata"}'),
    ('{"Color1": "negro"}'),
    ('{"Color1": "azul", "Color2": "negro"}'),
    ('{"Color1": "rojo", "Color2": "verde", "Color3": "gris"}'),
    ('{"Color1": "rojo", "Color2": "azul"}');
    

/* Inyeccion de data a la base de datos de la motocicleta KYMCO TWIST */

/* Insercion de data a la base de datos de las Motocicletas la informacion de la KYMCO TWIST */
INSERT INTO Motocicleta (Mto_Marca, Mto_Nom_Modelo, Mto_Año_Modelo, Mto_Cilindraje, Mto_Potencia, Mto_Torque, Mto_Colores, Mto_Tipo, Mto_Categoria, Mto_Url_imagen)
VALUES (
    4, 
    'KYMCO TWIST', 
    '2024', 
    '124.6 cc', 
    '9.3 HP @ 7500 rpm', 
    '9,25 Hp @ 7500 rpm', 
    4, 
    4, 
    2, 
    'https://auteco.vteximg.com.br/arquivos/ids/219158/moto_kymco_twist125_negro_2022_foto01.png?v=637945511165230000');

/* Insercion de data a la base de datos del grupo engine la informacion de la KYMCO TWIST */

INSERT INTO Grupo_Engine (Ge_Descripcion) VALUES
    ('Grupo de piezas Engine Correspondientes a la motocicleta KYMCO TWIST');

/* Insercion de data a la base de datos del grupo frame la informacion de la KYMCO TWIST */

INSERT INTO Grupo_Frame (Gf_Descripcion) VALUES
    ('Grupo de piezas Frame Correspondientes a la motocicleta KYMCO TWIST');

/* Insercion de data a la base de datos del catalogo la informacion de la KYMCO TWIST */

INSERT INTO Catalogo (Ctl_Motocicleta, Ctl_Modelo, Ctl_Descripcion, Ctl_Version, Ctl_Grupo_Engine, Ctl_Grupo_Frame)
VALUES (1, 'KYMCO TWIST', 'Catalogo de la motocicleta KYMCO TWIST', 'Agosto 2022', 1, 1);

/* Insercion de data a la base de datos de las partes del grupo engine la informacion de la KYMCO TWIST */

INSERT INTO Piezas_Grupo_Engine (Pge_No, Pge_Descripcion, Pge_Diagrama, Pge_Url_Imagen, Pge_Grupo_Ref)
VALUES
    ('E01', 'CARCASAS', 'https://i.ibb.co/pR4rNkS/CARCASAS.png', 'URL_IMAGEN_E01', 1),
    ('E02', 'CULATA', 'https://i.ibb.co/hmDvdXd/CULATA.png', 'URL_IMAGEN_E02', 1),
    ('E03', 'CILINDRO - PISTÓN - CIGÜEÑAL', 'https://i.ibb.co/yqT837C/CILINDRO-PIST-N-CIG-E-AL.png', 'URL_IMAGEN_E03', 1),
    ('E04', 'CUBIERTA MOTOR DERECHA', 'https://i.ibb.co/bFRFmf7/CUBIERTA-MOTOR-DERECHA.png', 'URL_IMAGEN_E04', 1),
    ('E05', 'CLUTCH CENTRIFUGO', 'https://i.ibb.co/t2MYPkb/CLUTCH-CENTRIFUGO.png', 'URL_IMAGEN_E05', 1),
    ('E06', 'MOTOR DE ARRANQUE - BOMBA DE ACEITE', 'https://i.ibb.co/7bKMPTL/MOTOR-DE-ARRANQUE-BOMBA-DE-ACEITE.png', 'URL_IMAGEN_E06', 1),
    ('E07', 'CUBIERTA VENTILADOR - MAGNETO', 'https://i.ibb.co/1625Yvc/CUBIERTA-VENTILADOR-MAGNETO.png', 'URL_IMAGEN_E07', 1),
    ('E08', 'TRANSMISIÓN', 'https://i.ibb.co/zQb6Rm5/TRANSMISI-N.png', 'URL_IMAGEN_E08', 1),
    ('E09', 'CARBURADOR', 'https://i.ibb.co/xFpCBPX/CARBURADOR.png', 'URL_IMAGEN_E09', 1);

/* Insercion de data a la base de datos de las partes del grupo frame la informacion de la KYMCO TWIST */

INSERT INTO Piezas_Grupo_Frame (Pgf_No, Pgf_Descripcion, Pgf_Diagrama, Pgf_Url_Imagen, Pgf_Grupo_Ref)
VALUES
    ('F01', 'FAROLA', 'DIAGRAMA_F01', 'URL_IMAGEN_F01', 1),
    ('F02', 'VELOCÍMETRO', 'DIAGRAMA_F02', 'URL_IMAGEN_F02', 1),
    ('F03', 'MANUBRIO - CUBIERTAS MANUBRIO', 'DIAGRAMA_F03', 'URL_IMAGEN_F03', 1),
    ('F04', 'BOMBA DE FRENO', 'DIAGRAMA_F04', 'URL_IMAGEN_F04', 1),
    ('F05', 'CUBIERTAS', 'DIAGRAMA_F05', 'URL_IMAGEN_F05', 1),
    ('F06', 'SUSPENSIÓN DELANTERA', 'DIAGRAMA_F06', 'URL_IMAGEN_F06', 1),
    ('F07', 'RIN DELANTERO', 'DIAGRAMA_F07', 'URL_IMAGEN_F07', 1),
    ('F08', 'RIN TRASERO', 'DIAGRAMA_F08', 'URL_IMAGEN_F08', 1),
    ('F09', 'SILLÍN', 'DIAGRAMA_F09', 'URL_IMAGEN_F09', 1),
    ('F10', 'TANQUE DE COMBUSTIBLE', 'DIAGRAMA_F10', 'URL_IMAGEN_F10', 1),
    ('F11', 'BATERÍA', 'DIAGRAMA_F11', 'URL_IMAGEN_F11', 1),
    ('F12', 'CUBIERTAS LATERALES - GUANTERA', 'DIAGRAMA_F12', 'URL_IMAGEN_F12', 1),
    ('F13', 'FILTRO DE AIRE', 'DIAGRAMA_F13', 'URL_IMAGEN_F13', 1),
    ('F14', 'SILENCIADOR', 'DIAGRAMA_F14', 'URL_IMAGEN_F14', 1),
    ('F15', 'GATO LATERAL - PEDAL CRANK', 'DIAGRAMA_F15', 'URL_IMAGEN_F15', 1),
    ('F16', 'AMORTIGUADOR', 'DIAGRAMA_F16', 'URL_IMAGEN_F16', 1),
    ('F17', 'DIRECCIONALES', 'DIAGRAMA_F17', 'URL_IMAGEN_F17', 1),
    ('F18', 'STOP - GUARDABARRO TRASERO', 'DIAGRAMA_F18', 'URL_IMAGEN_F18', 1),
    ('F19', 'SISTEMA ELÉCTRICO', 'DIAGRAMA_F19', 'URL_IMAGEN_F19', 1),
    ('F20', 'CHASIS', 'DIAGRAMA_F20', 'URL_IMAGEN_F20', 1),
    ('F21', 'FILTRO DE GASES', 'DIAGRAMA_F21', 'URL_IMAGEN_F21', 1),
    ('F22', 'CALCOMANIAS', 'DIAGRAMA_F22', 'URL_IMAGEN_F22', 1),
    ('F23', 'CALCOMANÍAS Y ACCESORIOS (TWIST CITY)', 'DIAGRAMA_F23', 'URL_IMAGEN_F23', 1);

/* Insercion de data a la base de datos de las subpartes de las CARCASAS la informacion de la KYMCO TWIST */

INSERT INTO SubPiezas_Grupo_Engine (Sge_Ref_No, Sge_Pieza_No, Sge_Descripcion, Sge_Url_Imagen, Sge_Grupo_Piezas) VALUES
('11100', '11100-GFY6-C00', 'Carcasa Derecha', '', 1),
('11102', '11102-1G87-C00', 'Buje Carcasa', '', 1),
('11192', '11192-GFY6-C00', 'Empaque Carcasa', '', 1),
('11200', '11200-GFY6-C00', 'Carcasa Izquierda', '', 1),
('11202', '11202-GGC7-301', 'Buje Carcasa', '', 1),
('11203', '11203-GGC7-W10', 'Buje Carcasa', '', 1),
('11206', '11206-GFY6-901', 'Platina Carcasa', '', 1),
('1120B', '1120B-KGN7-C00', 'Pin Pasador', '', 1),
('1122A', '1122A-GFY6-C10', 'Manguera', '', 1),
('11341', '11341-LLC5-C10-NGA', 'Cubierta Carcasa Izquierda', '', 1),
('11381', '11381-GFY6-941', 'Abrazadera Cable Acelerador', '', 1),
('11382', '11382-KUDU-W10', 'Abrazadera Cable Freno', '', 1),
('11383', '11383-GFY6-C00', 'Abrazadera', '', 1),
('11395', '11395-GFY6-C00', 'Empaque Tapa Carcasa', '', 1),
('2823A', '2823A-GFY6-C00', 'Piñón Crank', '', 1),
('28254', '28254-GGA7-004', 'Buje 12x16x12', '', 1),
('28254', '28254-KHG8-911', 'Buje 14x18x16', '', 1),
('2825A', '2825A-GFY6-C00', 'Eje Crank Completo', '', 1),
('50504', '50504-GFY6-900', 'Platina Motor', '', 1),
('90001-GBHB-C11', '90001-GBHB-C11', 'Tornillo 6x40', '', 1),
('90001-GBHB-C12', '90001-GBHB-C12', 'Tornillo 6x65', '', 1),
('90031', '90031-GFY6-C00', 'Tornillo 8x187.5', '', 1),
('90032', '90032-GFY6-C00', 'Tornillo 8x195.5', '', 1),
('9052A', '9052A-GFY6-C00', 'Tapón Aceite', '', 1),
('91003', '91003-KDS4-C00', 'Rodamiento Bolas 6301', '', 1),
('91009', '91009-GLE0-C00', 'Rodamiento Bolas 6004', '', 1),
('91202', '91202-GFY6-C00', 'Reten 19.8x30x5', '', 1),
('91255', '91255-LDC8-E10', 'Reten 27x42x7', '', 1),
('94301', '94301-08140', 'Pin Guía 8x14', '', 1),
('96001-06012', '96001-06012-08', 'Tornillo 6x12', '', 1),
('96001-06014', '96001-06014-08', 'Tornillo 6x14', '', 1),
('96001-06050', '96001-06050-08', 'Tornillo 6x50', '', 1),
('96100', '96100-60020-00', 'Rodamiento Bolas 6002', '', 1);

/* Insercion de data a la base de datos de las subpartes de la FAROLA la informacion de la KYMCO TWIST */

INSERT INTO SubPiezas_Grupo_Frame (Sgf_Ref_No, Sgf_Pieza_No, Sgf_Descripcion, Sgf_Url_Imagen, Sgf_Grupo_Piezas) VALUES
('33100', '33100-ACF9-M40', 'Farola Completa', '', 1),
('33108', '33108-ACF9-M40', 'Soquete Farola', '', 1),
('34901', '34901-ACF9-M40', 'Bombillo Farola 12V 35/35W', '', 1),
('34903', '34903-ACF9-M40', 'Bombillo', '', 1),
('93903', '93903-34380', 'Tornillo 4x12', '', 1);

/* © [2023] [MotoCrafters] Todos los derechos reservados.

Todos los derechos de autor a "Auteco Mobility" por la informacion publica usada en esta base de datos, 
todas las imágenes(URL´s), nombres y códigos de piezas de moto son pertenecientes a la marca "Auteco Mobility", 
exclusivamente usadas para fines de promoción, de aprendizaje, identificación de productos y con el propósito 
de destacar la relación con los productos genuinos de Auteco. */
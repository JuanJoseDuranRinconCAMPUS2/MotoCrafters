/* Creacion de la base de datos */

CREATE DATABASE db_MotoCrafters_sql;

/* Seleccionamos la base de datos */

USE db_MotoCrafters_sql;

/* creacion de la tabla de Motocicleta */

CREATE TABLE Motocicleta (
  Mto_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de la motocicleta',
  Mto_Marca INT UNSIGNED NOT NULL COMMENT 'Identificación de la marca de la motocicleta',
  Mto_Nom_Modelo VARCHAR(45) NOT NULL COMMENT 'Nombre del modelo de la motocicleta',
  Mto_Año_Modelo VARCHAR(4) NOT NULL COMMENT 'Año del modelo de la motocicleta',
  Mto_Cilindraje VARCHAR(10) NOT NULL COMMENT 'Cilindraje de la motocicleta',
  Mto_Potencia VARCHAR(40) NOT NULL COMMENT 'Potencia de la motocicleta',
  Mto_Torque VARCHAR(40) NOT NULL COMMENT 'Torque de la motocicleta',
  Mto_Colores INT UNSIGNED NOT NULL COMMENT 'Identificación de los colores disponibles de la motocicleta',
  Mto_Tipo INT UNSIGNED NOT NULL COMMENT 'Identificación del tipo de la motocicleta',
  Mto_Categoria INT UNSIGNED NOT NULL COMMENT 'Identificación de la categoría de la motocicleta',
  Mto_Catalogo INT UNSIGNED NOT NULL COMMENT 'Identificación del catálogo de piezas de la motocicleta',
  Mto_Url_imagen VARCHAR(200) NOT NULL COMMENT 'Imagen de la motocicleta'
);

/* creacion de la tabla de Colores */

CREATE TABLE Colores(
    Cl_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada grupo de colores',
    Cl_DisColores VARCHAR(10) NOT NULL COMMENT 'colores disponibles'
);

/* creacion de la tabla de Marca */

CREATE TABLE Marca(
    Mrc_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada marca de motocicletas',
    Mrc_Nombre VARCHAR(10) NOT NULL COMMENT 'Nombre de la marca de motocicletas'
);

/* creacion de la tabla de Tipo_Motocicleta */

CREATE TABLE Tipo_Motocicleta(
    Tpo_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada tipo de motocicletas',
    Tpo_Nombre VARCHAR(10) NOT NULL COMMENT 'Nombre del tipo de motocicletas'
);

/* creacion de la tabla de Categoria_Motocicleta */

CREATE TABLE Categoria_Motocicleta(
    Cat_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada categoria de motocicletas',
    Cat_Nombre VARCHAR(10) NOT NULL COMMENT 'Nombre de la categoria de motocicletas'
);

/* creacion de la tabla de Catalogo */

CREATE TABLE Catalogo(
    Ctl_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada catalogo de partes de cada motocicleta',
    Ctl_Modelo VARCHAR(40) NOT NULL COMMENT 'Modelo de la moto que aparece en el catalogo',
    Ctl_Descripcion VARCHAR(100) NOT NULL COMMENT 'Descripcion acerca del catalogo',
    Ctl_Version VARCHAR(50) NOT NULL COMMENT 'Version en la que se encuentra el catalogo',
    Ctl_Grupo_Engine INT UNSIGNED NOT NULL COMMENT 'Identificación del grupo de piezas engine que pertenece al catalogo',
    Ctl_Grupo_Frame INT UNSIGNED NOT NULL COMMENT 'Identificación del grupo de piezas frame que pertenece al catalogo'
);

/* creacion de la tabla de Grupo_Engine */

CREATE TABLE Grupo_Engine(
    Ge_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada grupo Engine de las motocicletas',
    Ge_Descripcion VARCHAR(100) NOT NULL COMMENT 'Descripcion acerca del grupo Engine de la motocicleta'
);

/* creacion de la tabla de Piezas_Grupo_Engine */

CREATE TABLE Piezas_Grupo_Engine(
    Pge_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada pieza que hace parte del grupo Engine',
    Pge_No VARCHAR(3) NOT NULL COMMENT 'Numero de identificacion de la pieza en el catalogo oficial',
    Pge_Descripcion VARCHAR(100) NOT NULL COMMENT 'Descripcion acerca de la pieza que hace parte del grupo Engine',
    Pge_Diagrama VARCHAR(200) NOT NULL COMMENT 'Url del diagrama de sub piezas de la pieza',
    Pge_Url_Imagen VARCHAR(200) NOT NULL COMMENT 'Url de la imagen de la pieza',
    Pge_Grupo_Ref INT UNSIGNED NOT NULL COMMENT 'Identificación del grupo Engine que pertenece la pieza'
);

/* creacion de la tabla de Piezas_Grupo_Frame */

CREATE TABLE Piezas_Grupo_Frame(
    Pgf_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada pieza que hace parte del grupo Frame',
    Pgf_No VARCHAR(3) NOT NULL COMMENT 'Numero de identificacion de la pieza en el catalogo oficial',
    Pgf_Descripcion VARCHAR(100) NOT NULL COMMENT 'Descripcion acerca de la pieza que hace parte del grupo Frame',
    Pgf_Diagrama VARCHAR(200) NOT NULL COMMENT 'Url del diagrama de sub piezas de la pieza',
    Pgf_Url_Imagen VARCHAR(200) NOT NULL COMMENT 'Url de la imagen de la pieza',
    Pgf_Grupo_Ref INT UNSIGNED NOT NULL COMMENT 'Identificación del grupo Frame que pertenece la pieza'
);

/* creacion de la tabla de SubPiezas_Grupo_Engine */

CREATE TABLE SubPiezas_Grupo_Engine(
    Sge_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada subpieza que hace parte de la pieza principal',
    Sge_Ref_No VARCHAR(20) NOT NULL COMMENT 'Numero de referencia de la subpieza en el diagrama',
    Sge_Pieza_No VARCHAR(20) NOT NULL COMMENT 'Numero de identificacion de la subpieza en el catalogo',
    Sge_Descripcion VARCHAR(100) NOT NULL COMMENT 'Descripcion referente a la subpieza',
    Sge_Url_Imagen VARCHAR(200) NOT NULL COMMENT 'Url de la imagen de la subpieza',
    Sge_Grupo_Piezas INT UNSIGNED NOT NULL COMMENT 'Identificación de la pieza principal que pertenece la subpieza Engine'
);

/* creacion de la tabla de SubPiezas_Grupo_Frame */

CREATE TABLE SubPiezas_Grupo_Frame(
    Sgf_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de cada subpieza que hace parte de la pieza principal',
    Sgf_Ref_No VARCHAR(20) NOT NULL COMMENT 'Numero de referencia de la subpieza en el diagrama',
    Sgf_Pieza_No VARCHAR(20) NOT NULL COMMENT 'Numero de identificacion de la subpieza en el catalogo',
    Sgf_Descripcion VARCHAR(100) NOT NULL COMMENT 'Descripcion referente a la subpieza',
    Sgf_Url_Imagen VARCHAR(200) NOT NULL COMMENT 'Url de la imagen de la subpieza',
    Sgf_Grupo_Piezas INT UNSIGNED NOT NULL COMMENT 'Identificación de la pieza principal que pertenece la subpieza Frame'
);

/* creacion de la tabla de Inventario */

CREATE TABLE Inventario(
    Inv_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador del inventario',
    Inv_Descripcion VARCHAR(100) NOT NULL COMMENT 'Descripcion del inventario'
);

/* creacion de la tabla de Inv_Piezas_Engine */

CREATE TABLE Inv_Piezas_Engine(
    Ipe_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de la subpieza Engine',
    Ipe_Pieza_Id INT UNSIGNED NOT NULL COMMENT 'Identificación de la subpieza Engine que pertenece a la subpieza del catalogo',
    Ipe_Fecha_Entrada DATE NOT NULL COMMENT 'Fecha de entrada de la subpieza al taller',
    Ipe_Cantidad INT UNSIGNED NOT NULL COMMENT 'Cantidad unidades de la subpieza en el inventario',
    Ipe_Observaciones VARCHAR(100) NOT NULL COMMENT 'observaciones acerca de la subpieza',
    Ipe_Inventario INT UNSIGNED NOT NULL COMMENT 'Identificación del inventario que pertenece la subpieza Engine'
);

/* creacion de la tabla de Inv_Piezas_Frame */

CREATE TABLE Inv_Piezas_Frame(
    Ipf_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de la subpieza Frame',
    Ipf_Pieza_Id INT UNSIGNED NOT NULL COMMENT 'Identificación de la subpieza Frame que pertenece a la subpieza del catalogo',
    Ipf_Fecha_Entrada DATE NOT NULL COMMENT 'Fecha de entrada de la subpieza al taller',
    Ipf_Cantidad INT UNSIGNED NOT NULL COMMENT 'Cantidad unidades de la subpieza en el inventario',
    Ipf_Observaciones VARCHAR(100) NOT NULL COMMENT 'observaciones acerca de la subpieza',
    Ipf_Inventario INT UNSIGNED NOT NULL COMMENT 'Identificación del inventario que pertenece la subpieza Frame'
);

/* creacion de la tabla de Motocicleta_En_Taller */

CREATE TABLE Motocicleta_En_Taller (
  Met_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador de la motocicleta',
  Met_Marca INT UNSIGNED NOT NULL COMMENT 'Identificación de la marca de la motocicleta',
  Met_Nom_Modelo VARCHAR(45) NOT NULL COMMENT 'Nombre del modelo de la motocicleta',
  Met_Año_Modelo VARCHAR(4) NOT NULL COMMENT 'Año del modelo de la motocicleta',
  Met_Num_Chasis VARCHAR(17) NOT NULL COMMENT 'Numero del chasis de la motocicleta',
  Met_Color VARCHAR(10) NOT NULL COMMENT 'Color de la motocicleta',
  Met_Dueño INT UNSIGNED NOT NULL COMMENT 'Identificación del dueño de la motocicleta',
  Met_Estado INT UNSIGNED NOT NULL COMMENT 'Identificación del estado de la motocicleta',
  Met_Fecha_Ingreso DATE NOT NULL COMMENT 'Fecha de ingreso de la motocicleta al taller',
  Met_Fecha_Salida DATE COMMENT 'Fecha de salida de la motocicleta del taller',
  Met_Descripcion_Problema VARCHAR(255) NOT NULL COMMENT 'Descripcion de los problemas encontrados en la motocicleta',
  Met_Descripcion_Reparacion VARCHAR(255) COMMENT 'Descripcion de las reparaciones realizadas en la motocicleta',
  Met_Costo_Reparacion INT UNSIGNED NOT NULL COMMENT 'Costo de la reparacion de la motocicleta',
  Mto_Url_imagen VARCHAR(200) NOT NULL COMMENT 'Imagen de la motocicleta'
);

/* creacion de la tabla de Estado_Taller */

CREATE TABLE Estado_Taller(
    Et_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador del estado de la motocicleta',
    Et_Nombre VARCHAR(20) NOT NULL COMMENT 'nombre del estado en que se encuentra la motocicleta en estos momentos'
);

/* creacion de la tabla de Dueño_Motocicleta */

CREATE TABLE Dueño_Motocicleta(
    Dm_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Identificador del dueño de la motocicleta',
    Dm_Nombre VARCHAR(100) NOT NULL COMMENT 'Nombre del dueño de la motocicleta',
    Dm_Tipo_Iden INT UNSIGNED NOT NULL COMMENT 'Identificación del tipo de documento que tiene el dueño de la motocicleta',
    Dm_Identificacion VARCHAR(100) NOT NULL COMMENT 'Numero de identificacion del dueño de la motocicleta',
    Dm_Telefono VARCHAR(100) NOT NULL COMMENT 'Telefono del dueño de la motocicleta',
    Dm_Email VARCHAR(100) COMMENT 'email del dueño de la motocicleta',
    Dm_Direccion VARCHAR(100) NOT NULL COMMENT 'Direccion del dueño de la motocicleta',
    Dm_Genero INT UNSIGNED NOT NULL COMMENT 'Identificación del genero que tiene el dueño de la motocicleta',
    Dm_Fecha_Registro DATE NOT NULL COMMENT 'Fecha de registro del dueño de la motocicleta'
);

/* creacion de la tabla de Tipo_Identificacion */

CREATE TABLE Tipo_Identificacion(
    Td_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del tipo de documento',
    Td_Nombre VARCHAR(20) NOT NULL COMMENT'Nombre del tipo de documento',
    Td_Abreviatura VARCHAR(5) NOT NULL COMMENT'Abreviatura del tipo de documento'
);

/* creacion de la tabla de Genero_Identificacion */

CREATE TABLE Genero_Identificacion(
    Gt_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del genero del dueño',
    Gt_Nombre VARCHAR(20) NOT NULL COMMENT'Nombre del genero del dueño',
    Gt_Abreviatura VARCHAR(5) NOT NULL COMMENT'Abreviatura del genero del dueño'
);

/* Creacion de las llaves foraneas */
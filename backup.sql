PGDMP     9                 	    x            blog    12.3    12.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16428    blog    DATABASE     �   CREATE DATABASE blog WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE blog;
                postgres    false            �            1259    16450    baiviet    TABLE     [   CREATE TABLE public.baiviet (
    id bigint NOT NULL,
    tieude text,
    noidung text
);
    DROP TABLE public.baiviet;
       public         heap    postgres    false            �            1259    16448    baiviet_id_seq    SEQUENCE     w   CREATE SEQUENCE public.baiviet_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baiviet_id_seq;
       public          postgres    false    203                       0    0    baiviet_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baiviet_id_seq OWNED BY public.baiviet.id;
          public          postgres    false    202            
           2604    16453 
   baiviet id    DEFAULT     h   ALTER TABLE ONLY public.baiviet ALTER COLUMN id SET DEFAULT nextval('public.baiviet_id_seq'::regclass);
 9   ALTER TABLE public.baiviet ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203                      0    16450    baiviet 
   TABLE DATA           6   COPY public.baiviet (id, tieude, noidung) FROM stdin;
    public          postgres    false    203   D
       	           0    0    baiviet_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baiviet_id_seq', 85, true);
          public          postgres    false    202            �
           2606    16458    baiviet baiviet_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baiviet
    ADD CONSTRAINT baiviet_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baiviet DROP CONSTRAINT baiviet_pkey;
       public            postgres    false    203                  x������ � �     
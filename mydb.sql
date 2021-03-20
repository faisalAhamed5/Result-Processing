PGDMP     ;    $                y            results    13.0    13.0 I               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    182057    results    DATABASE     k   CREATE DATABASE results WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE results;
                test    false            �            1259    182058    chairman_dbs    TABLE     k  CREATE TABLE public.chairman_dbs (
    id integer NOT NULL,
    president boolean NOT NULL,
    email character varying(255) NOT NULL,
    session_id character varying(255) NOT NULL,
    semester integer NOT NULL,
    dept_id character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
     DROP TABLE public.chairman_dbs;
       public         heap    test    false            �            1259    182064    chairman_dbs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.chairman_dbs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.chairman_dbs_id_seq;
       public          test    false    200                       0    0    chairman_dbs_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.chairman_dbs_id_seq OWNED BY public.chairman_dbs.id;
          public          test    false    201            �            1259    182066    dept_dbs    TABLE       CREATE TABLE public.dept_dbs (
    dept_id character varying(255) NOT NULL,
    dept_name character varying(255) NOT NULL,
    degree character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.dept_dbs;
       public         heap    test    false            �            1259    182072    results_dbs    TABLE     �  CREATE TABLE public.results_dbs (
    result_id integer NOT NULL,
    semester integer NOT NULL,
    sub_id character varying(255) NOT NULL,
    session_id character varying(255) NOT NULL,
    q1 numeric,
    q2 numeric,
    q3 numeric,
    q4 numeric,
    q5 numeric,
    q6 numeric,
    q7 numeric,
    q8 numeric,
    q9 numeric,
    q10 numeric,
    q11 numeric,
    q12 numeric,
    q13 numeric,
    q14 numeric,
    q15 numeric,
    t1 numeric,
    t2 numeric,
    m1 numeric,
    viva numeric,
    lab numeric,
    attendance numeric,
    exam_type character varying(255) NOT NULL,
    dept_id character varying(255) NOT NULL,
    s_id character varying(255) NOT NULL,
    teacher_name character varying(255) NOT NULL,
    teacher_email character varying(255) NOT NULL,
    role_id character varying(255) NOT NULL,
    result_type character varying(255) NOT NULL,
    exam_roll integer NOT NULL,
    review boolean,
    "thirtyPercentMark" boolean,
    publish boolean,
    result character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    practical numeric,
    clinical numeric,
    "obtainedMarks" numeric,
    "obtained70Marks" numeric
);
    DROP TABLE public.results_dbs;
       public         heap    test    false            �            1259    182078    results_dbs_result_id_seq    SEQUENCE     �   CREATE SEQUENCE public.results_dbs_result_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.results_dbs_result_id_seq;
       public          test    false    203                       0    0    results_dbs_result_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.results_dbs_result_id_seq OWNED BY public.results_dbs.result_id;
          public          test    false    204            �            1259    182080    role_dbs    TABLE     �   CREATE TABLE public.role_dbs (
    role_id character varying(255) NOT NULL,
    role character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.role_dbs;
       public         heap    test    false            �            1259    182086    session_dbs    TABLE       CREATE TABLE public.session_dbs (
    id integer NOT NULL,
    session_id character varying(255) NOT NULL,
    month character varying(255) NOT NULL,
    year integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.session_dbs;
       public         heap    test    false            �            1259    182092    session_dbs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.session_dbs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.session_dbs_id_seq;
       public          test    false    206                       0    0    session_dbs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.session_dbs_id_seq OWNED BY public.session_dbs.id;
          public          test    false    207            �            1259    182094    student_dbs    TABLE       CREATE TABLE public.student_dbs (
    id integer NOT NULL,
    s_name character varying(255) NOT NULL,
    dept_id character varying(255) NOT NULL,
    batch integer NOT NULL,
    exam_roll integer NOT NULL,
    reg_no character varying(255) NOT NULL,
    degree character varying(255) NOT NULL,
    s_id character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    semester integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.student_dbs;
       public         heap    test    false            �            1259    182100    student_dbs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.student_dbs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.student_dbs_id_seq;
       public          test    false    208                       0    0    student_dbs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.student_dbs_id_seq OWNED BY public.student_dbs.id;
          public          test    false    209            �            1259    182102    sub_assign_dbs    TABLE     �  CREATE TABLE public.sub_assign_dbs (
    assign_id integer NOT NULL,
    email character varying(255) NOT NULL,
    sub_id character varying(255) NOT NULL,
    session_id character varying(255) NOT NULL,
    dept_id character varying(255) NOT NULL,
    semester integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.sub_assign_dbs;
       public         heap    test    false            �            1259    182108    sub_assign_dbs_assign_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sub_assign_dbs_assign_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.sub_assign_dbs_assign_id_seq;
       public          test    false    210                       0    0    sub_assign_dbs_assign_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.sub_assign_dbs_assign_id_seq OWNED BY public.sub_assign_dbs.assign_id;
          public          test    false    211            �            1259    182110    subject_dbs    TABLE     �  CREATE TABLE public.subject_dbs (
    id integer NOT NULL,
    sub_id character varying(255) NOT NULL,
    sub_name character varying(255) NOT NULL,
    sub_code character varying(255) NOT NULL,
    dept_id character varying(255) NOT NULL,
    credit numeric NOT NULL,
    total_marks numeric NOT NULL,
    semester integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.subject_dbs;
       public         heap    test    false            �            1259    182116    subject_dbs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subject_dbs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.subject_dbs_id_seq;
       public          test    false    212                       0    0    subject_dbs_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.subject_dbs_id_seq OWNED BY public.subject_dbs.id;
          public          test    false    213            �            1259    182118    user_dbs    TABLE     �  CREATE TABLE public.user_dbs (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    pass character varying(255) NOT NULL,
    role_id character varying(255) NOT NULL,
    dept_id character varying(255) NOT NULL,
    active boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.user_dbs;
       public         heap    test    false            �            1259    182124    user_dbs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_dbs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.user_dbs_id_seq;
       public          test    false    214                       0    0    user_dbs_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.user_dbs_id_seq OWNED BY public.user_dbs.id;
          public          test    false    215            W           2604    182126    chairman_dbs id    DEFAULT     r   ALTER TABLE ONLY public.chairman_dbs ALTER COLUMN id SET DEFAULT nextval('public.chairman_dbs_id_seq'::regclass);
 >   ALTER TABLE public.chairman_dbs ALTER COLUMN id DROP DEFAULT;
       public          test    false    201    200            X           2604    182127    results_dbs result_id    DEFAULT     ~   ALTER TABLE ONLY public.results_dbs ALTER COLUMN result_id SET DEFAULT nextval('public.results_dbs_result_id_seq'::regclass);
 D   ALTER TABLE public.results_dbs ALTER COLUMN result_id DROP DEFAULT;
       public          test    false    204    203            Y           2604    182128    session_dbs id    DEFAULT     p   ALTER TABLE ONLY public.session_dbs ALTER COLUMN id SET DEFAULT nextval('public.session_dbs_id_seq'::regclass);
 =   ALTER TABLE public.session_dbs ALTER COLUMN id DROP DEFAULT;
       public          test    false    207    206            Z           2604    182129    student_dbs id    DEFAULT     p   ALTER TABLE ONLY public.student_dbs ALTER COLUMN id SET DEFAULT nextval('public.student_dbs_id_seq'::regclass);
 =   ALTER TABLE public.student_dbs ALTER COLUMN id DROP DEFAULT;
       public          test    false    209    208            [           2604    182130    sub_assign_dbs assign_id    DEFAULT     �   ALTER TABLE ONLY public.sub_assign_dbs ALTER COLUMN assign_id SET DEFAULT nextval('public.sub_assign_dbs_assign_id_seq'::regclass);
 G   ALTER TABLE public.sub_assign_dbs ALTER COLUMN assign_id DROP DEFAULT;
       public          test    false    211    210            \           2604    182131    subject_dbs id    DEFAULT     p   ALTER TABLE ONLY public.subject_dbs ALTER COLUMN id SET DEFAULT nextval('public.subject_dbs_id_seq'::regclass);
 =   ALTER TABLE public.subject_dbs ALTER COLUMN id DROP DEFAULT;
       public          test    false    213    212            ]           2604    182132    user_dbs id    DEFAULT     j   ALTER TABLE ONLY public.user_dbs ALTER COLUMN id SET DEFAULT nextval('public.user_dbs_id_seq'::regclass);
 :   ALTER TABLE public.user_dbs ALTER COLUMN id DROP DEFAULT;
       public          test    false    215    214                      0    182058    chairman_dbs 
   TABLE DATA           u   COPY public.chairman_dbs (id, president, email, session_id, semester, dept_id, "createdAt", "updatedAt") FROM stdin;
    public          test    false    200   Mc                 0    182066    dept_dbs 
   TABLE DATA           X   COPY public.dept_dbs (dept_id, dept_name, degree, "createdAt", "updatedAt") FROM stdin;
    public          test    false    202   Od                 0    182072    results_dbs 
   TABLE DATA           �  COPY public.results_dbs (result_id, semester, sub_id, session_id, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, t1, t2, m1, viva, lab, attendance, exam_type, dept_id, s_id, teacher_name, teacher_email, role_id, result_type, exam_roll, review, "thirtyPercentMark", publish, result, "createdAt", "updatedAt", practical, clinical, "obtainedMarks", "obtained70Marks") FROM stdin;
    public          test    false    203   �d                 0    182080    role_dbs 
   TABLE DATA           K   COPY public.role_dbs (role_id, role, "createdAt", "updatedAt") FROM stdin;
    public          test    false    205   �       	          0    182086    session_dbs 
   TABLE DATA           \   COPY public.session_dbs (id, session_id, month, year, "createdAt", "updatedAt") FROM stdin;
    public          test    false    206   ��                 0    182094    student_dbs 
   TABLE DATA           �   COPY public.student_dbs (id, s_name, dept_id, batch, exam_roll, reg_no, degree, s_id, email, semester, "createdAt", "updatedAt") FROM stdin;
    public          test    false    208   ��                 0    182102    sub_assign_dbs 
   TABLE DATA           {   COPY public.sub_assign_dbs (assign_id, email, sub_id, session_id, dept_id, semester, "createdAt", "updatedAt") FROM stdin;
    public          test    false    210   �                 0    182110    subject_dbs 
   TABLE DATA           �   COPY public.subject_dbs (id, sub_id, sub_name, sub_code, dept_id, credit, total_marks, semester, "createdAt", "updatedAt") FROM stdin;
    public          test    false    212   ��                 0    182118    user_dbs 
   TABLE DATA           q   COPY public.user_dbs (id, username, email, pass, role_id, dept_id, active, "createdAt", "updatedAt") FROM stdin;
    public          test    false    214   p�                   0    0    chairman_dbs_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.chairman_dbs_id_seq', 22, true);
          public          test    false    201            !           0    0    results_dbs_result_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.results_dbs_result_id_seq', 575, true);
          public          test    false    204            "           0    0    session_dbs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.session_dbs_id_seq', 11, true);
          public          test    false    207            #           0    0    student_dbs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.student_dbs_id_seq', 21, true);
          public          test    false    209            $           0    0    sub_assign_dbs_assign_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.sub_assign_dbs_assign_id_seq', 210, true);
          public          test    false    211            %           0    0    subject_dbs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.subject_dbs_id_seq', 78, true);
          public          test    false    213            &           0    0    user_dbs_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.user_dbs_id_seq', 86, true);
          public          test    false    215            _           2606    182134    chairman_dbs chairman_dbs_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.chairman_dbs
    ADD CONSTRAINT chairman_dbs_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.chairman_dbs DROP CONSTRAINT chairman_dbs_pkey;
       public            test    false    200            a           2606    182136    dept_dbs dept_dbs_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.dept_dbs
    ADD CONSTRAINT dept_dbs_pkey PRIMARY KEY (dept_id);
 @   ALTER TABLE ONLY public.dept_dbs DROP CONSTRAINT dept_dbs_pkey;
       public            test    false    202            c           2606    182138    results_dbs results_dbs_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.results_dbs
    ADD CONSTRAINT results_dbs_pkey PRIMARY KEY (result_id);
 F   ALTER TABLE ONLY public.results_dbs DROP CONSTRAINT results_dbs_pkey;
       public            test    false    203            e           2606    182140    role_dbs role_dbs_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.role_dbs
    ADD CONSTRAINT role_dbs_pkey PRIMARY KEY (role_id);
 @   ALTER TABLE ONLY public.role_dbs DROP CONSTRAINT role_dbs_pkey;
       public            test    false    205            g           2606    182142    session_dbs session_dbs_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.session_dbs
    ADD CONSTRAINT session_dbs_pkey PRIMARY KEY (session_id);
 F   ALTER TABLE ONLY public.session_dbs DROP CONSTRAINT session_dbs_pkey;
       public            test    false    206            i           2606    182144    student_dbs student_dbs_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.student_dbs
    ADD CONSTRAINT student_dbs_pkey PRIMARY KEY (s_id);
 F   ALTER TABLE ONLY public.student_dbs DROP CONSTRAINT student_dbs_pkey;
       public            test    false    208            k           2606    182146 "   sub_assign_dbs sub_assign_dbs_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.sub_assign_dbs
    ADD CONSTRAINT sub_assign_dbs_pkey PRIMARY KEY (assign_id);
 L   ALTER TABLE ONLY public.sub_assign_dbs DROP CONSTRAINT sub_assign_dbs_pkey;
       public            test    false    210            m           2606    182148    subject_dbs subject_dbs_id_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.subject_dbs
    ADD CONSTRAINT subject_dbs_id_key UNIQUE (id);
 H   ALTER TABLE ONLY public.subject_dbs DROP CONSTRAINT subject_dbs_id_key;
       public            test    false    212            o           2606    182150    subject_dbs subject_dbs_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.subject_dbs
    ADD CONSTRAINT subject_dbs_pkey PRIMARY KEY (sub_id);
 F   ALTER TABLE ONLY public.subject_dbs DROP CONSTRAINT subject_dbs_pkey;
       public            test    false    212            q           2606    182152 $   subject_dbs subject_dbs_sub_code_key 
   CONSTRAINT     c   ALTER TABLE ONLY public.subject_dbs
    ADD CONSTRAINT subject_dbs_sub_code_key UNIQUE (sub_code);
 N   ALTER TABLE ONLY public.subject_dbs DROP CONSTRAINT subject_dbs_sub_code_key;
       public            test    false    212            s           2606    182154    user_dbs user_dbs_id_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.user_dbs
    ADD CONSTRAINT user_dbs_id_key UNIQUE (id);
 B   ALTER TABLE ONLY public.user_dbs DROP CONSTRAINT user_dbs_id_key;
       public            test    false    214            u           2606    182156    user_dbs user_dbs_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.user_dbs
    ADD CONSTRAINT user_dbs_pkey PRIMARY KEY (email);
 @   ALTER TABLE ONLY public.user_dbs DROP CONSTRAINT user_dbs_pkey;
       public            test    false    214            v           2606    182157 !   results_dbs results_dbs_s_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.results_dbs
    ADD CONSTRAINT results_dbs_s_id_fkey FOREIGN KEY (s_id) REFERENCES public.student_dbs(s_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 K   ALTER TABLE ONLY public.results_dbs DROP CONSTRAINT results_dbs_s_id_fkey;
       public          test    false    203    2921    208            w           2606    182162 #   results_dbs results_dbs_sub_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.results_dbs
    ADD CONSTRAINT results_dbs_sub_id_fkey FOREIGN KEY (sub_id) REFERENCES public.subject_dbs(sub_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 M   ALTER TABLE ONLY public.results_dbs DROP CONSTRAINT results_dbs_sub_id_fkey;
       public          test    false    212    203    2927            x           2606    182167 $   student_dbs student_dbs_dept_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.student_dbs
    ADD CONSTRAINT student_dbs_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES public.dept_dbs(dept_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 N   ALTER TABLE ONLY public.student_dbs DROP CONSTRAINT student_dbs_dept_id_fkey;
       public          test    false    202    208    2913            y           2606    182172 "   student_dbs student_dbs_email_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.student_dbs
    ADD CONSTRAINT student_dbs_email_fkey FOREIGN KEY (email) REFERENCES public.user_dbs(email) ON UPDATE CASCADE ON DELETE RESTRICT;
 L   ALTER TABLE ONLY public.student_dbs DROP CONSTRAINT student_dbs_email_fkey;
       public          test    false    2933    214    208            z           2606    182177 *   sub_assign_dbs sub_assign_dbs_dept_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sub_assign_dbs
    ADD CONSTRAINT sub_assign_dbs_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES public.dept_dbs(dept_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public.sub_assign_dbs DROP CONSTRAINT sub_assign_dbs_dept_id_fkey;
       public          test    false    210    202    2913            {           2606    182182 (   sub_assign_dbs sub_assign_dbs_email_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sub_assign_dbs
    ADD CONSTRAINT sub_assign_dbs_email_fkey FOREIGN KEY (email) REFERENCES public.user_dbs(email) ON UPDATE CASCADE ON DELETE RESTRICT;
 R   ALTER TABLE ONLY public.sub_assign_dbs DROP CONSTRAINT sub_assign_dbs_email_fkey;
       public          test    false    210    214    2933            |           2606    182187 -   sub_assign_dbs sub_assign_dbs_session_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sub_assign_dbs
    ADD CONSTRAINT sub_assign_dbs_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.session_dbs(session_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 W   ALTER TABLE ONLY public.sub_assign_dbs DROP CONSTRAINT sub_assign_dbs_session_id_fkey;
       public          test    false    210    2919    206            }           2606    182192 )   sub_assign_dbs sub_assign_dbs_sub_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sub_assign_dbs
    ADD CONSTRAINT sub_assign_dbs_sub_id_fkey FOREIGN KEY (sub_id) REFERENCES public.subject_dbs(sub_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 S   ALTER TABLE ONLY public.sub_assign_dbs DROP CONSTRAINT sub_assign_dbs_sub_id_fkey;
       public          test    false    212    210    2927            ~           2606    182197 $   subject_dbs subject_dbs_dept_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.subject_dbs
    ADD CONSTRAINT subject_dbs_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES public.dept_dbs(dept_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 N   ALTER TABLE ONLY public.subject_dbs DROP CONSTRAINT subject_dbs_dept_id_fkey;
       public          test    false    2913    202    212                       2606    182202    user_dbs user_dbs_dept_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_dbs
    ADD CONSTRAINT user_dbs_dept_id_fkey FOREIGN KEY (dept_id) REFERENCES public.dept_dbs(dept_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public.user_dbs DROP CONSTRAINT user_dbs_dept_id_fkey;
       public          test    false    214    2913    202            �           2606    182207    user_dbs user_dbs_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_dbs
    ADD CONSTRAINT user_dbs_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.role_dbs(role_id) ON UPDATE CASCADE ON DELETE RESTRICT;
 H   ALTER TABLE ONLY public.user_dbs DROP CONSTRAINT user_dbs_role_id_fkey;
       public          test    false    214    2917    205               �   x�}�?O�0����StG�|��TT13��8��IZ�f�O����+?��&�cZ�q�1�<��y��C9��5y ؿ<k��6[�2=�ޱ�.>h�O�z���/�����˚��%���)���`=\��%'yx #�䕏$�-!Ū�i>ix+���N�[B�*���%/��N�MP��ȷ��+���J�;�m+�ǻ��L7��<�� �.����-!sŏiLo��z�(پ�Ag�.�B���         �   x�}̽
�0@�9y�L.Ґ�*�Z
vpjG��i��H�^��Cu9ˁ��[Ҥ��(�Y�#��c-�� 9b ��QB�J�JX&���3�[����g�n ^S��������s��Ni.�[�ע�Ld��_~X��F�M��SJ_6?�            x��]ٮ$�q}��|7T�}�'�e�=�e$q�	����Ȭ�Ϊ�����WC^�}'N,������o~��7Z+}��?��?}��7F�p�uq�ˎ������;W~����ׯ����;����/����ϟ��|-�����������?��������__��˿~�廟�|������_��?>}�\�2�W��J�o��*w5n�*��
�٫�W����H��?��C's�dhL-6w���W�n��>�ɮaBXap��d�`�!�8�3k';��_fa/���,��������1��`�_��=��k�M8��y�N���I�}/�1�9&�&]"�e������w�z���4�l�ޗ,k��*�h�7�cX�X𥳐��{_�wL�sPj�ˍ�L���`T���`s��2[QMAe�;7�
�d�8��ڊʎ�nB�G�E�Ή�*7����j#j[��"��`L�Ԑ��� RKv����_E�=,���x��,&�K�{�r#OL�;�&
&��,Ѩ�0�4KMy�U�o�$U��'c�W���XP3@i��0"ÿ��s�P�A�'�/�����o�R���������3��<aT#("Sj&֧ߵER�BP$�5�l���XLw�H}.p��`�La�KQ����a1�9�-�̹��R��ɅNL�bV�b�-w۲j�G��2�b2��C�Y����NM�M��Z�K��H�|UfPOh���&Z������U6�}ϳ�a͵���<&�9�w��`�+�a��X�3�v��ϓ�~ᰘ��H��3�8�|>����_�o���ׯ(���h	4������w,{����ê����6�m��6�m��2<�k��x`���r-��q��}vi[X.�����%���lW.<���	O���uW��Z~�����;J|J\�U'|&(A-���cI�`IkXҠ��Ʉ%Ƽ h���D�1	x�UD�85��ц�Y�XL���h�ڏs��<N8ڲ�ɞHj<��9���iN�q� �x.��z�q��8 &<G���r�V�@Y
ԑZ���Hr������dR�fܠd�M_L4�=�)�!�H
�,|k����qv�t�m�VAz_����L�D��6�N��I�5��fX���*6~R	���x�PU���%����񓢤Ý<x��Pk�� z���v���u[ya��Rj'����fܢ����lXW�+����蟜m��+��0���� �e�FR�:ֱ�M�Qk����`�h�����Cd�Зu����Bz�����
U�F.��V�͛#+nwp_�̒����sI�Pt���Tju'�9�������3�W�ٙʝܖ�_Vg*cJ`�!$�W�c�lgnYK�]qe�p0�\f�|���ȷ�Ol3<�	�fp�]#�0��]=��A�t�3Wk��`&�����R+�%�y$!L"WTܰ�$���j%G�9�F�V�r~��ĩ��ig,�aL��j	�sË�3�xR8P,�^pb�x"o���>Z�⁢B���&,)���IbH
��!s[�s_���Od�((��0�$�d���nN���ԝ&"y�G����G��YAw⒌���m�83��ˬ�;q�D�O�ṅOb���Ni���F�dˬ�Jrg��9s{S�FO��`ީsX�V롓v�h |��:���Wl���J��<�z�����͹�TB���o��K97�(� �L�W��I���V0Am&����,���,BT� �l� �D�
N\���*pIrh�a�р2�z5����$Ń����m���T�o%f�d_��y@#�5� �j�i�����:��լ�i��Le(�~b_Q�F���PE����_�;��(��}7.����8����1�:R@����*�h��-n݈�	�CP$��0*�C�=5(.���ۈ��~kOg�IP��qap�� n����T@�/�������O'
�
�(K������i�ۮ,���jx1`�刞�zn�`�a�(���Ĵ�x�L F��3�5`��t�+N'i:-_e.��g!�LWR��b��X���ȶ�f��u5�H�b� �y�
%���6�y���-�|3׀;��
$����`��Q|w��E�Wm!s�&�ܓ�W0�>Ǻ�U����E���H1�A�kY��E�Әk���H߫�Rd���^�wLaN{HZ��,1��>�ɬg�)*�s���}iy�k��5�Α���F�W���Ԭ�R�x�E�G�s��T,����m���^o!�b��u&�=�RC�PHr=3FC(U�@��}/=��u{[F��5$S�-�Rܐo㻮�x��
"�/@��Am�.��Y���$���������zOK\��H�ᆉ�m�9$�q��Vn0Ԃ-c�ܰ]��~�-�͡�8�p�jU�,E�0��t�-����.�{��'P�P�O��%�c<m��N$�SI����JG�b�$D��4	����;�����!(�234��dۨ=�C��7�9P���dX�!���j3�H,�w4Py	���`�<��~@�ͨ�$b��#����8gUxG�'�Oѓ$�]9�b����T�\��b��AS'+�ly0��#}-���f+������_zC1�.mn��;��R8�@m��C�Q_��X���Y��w��dǤ�;N�F��PѾ�S�v)O�-��ԓ�b���]&��s�.0P��h��1�mk��Tb�q3fWW��w�����-�w��x��,?sXfR$7󆩃p���qCr��L�L�mK	=5��Cn��؁��ͪ��6H�-_v�������l�؞a�3G��*��AВ*!$p�V2�3���2�|	�ౡP�e�`j�l�_k���SAk����<5{,�T��7=. O!$�Z.� �5���7�o�~��������m�)���68Ģ��M��,a�Ha�b,+2t�b;"���x�;�9 J��(
�CYɡ��s+3m�M��=f�/ƲB��_92a��n�\��� �5��F�$<B(���!�}mPK.�����ĨS4+5��@][ñ��FTj8M��s�3��7�b���g/�:�ܰ�@��{�#OET@���&B��*����|jk�Z���N�%��u=9���X�e�f3�e�א����)�p�`����6H����CF(T/�(����,+E�����i�E�U���H��?�M��8Y�ڼ'I��@[K�O��\��(0�z7��<K8��ω�1yH�*��:�1�z=�'5��C�O9��T[����Q����T�K
�Y���'Ecՠ���a	�1��48c�-����Ok<,��o��J�x|{���5pʉ'�7'.�I'�6��޿�Y'1As⚛����]���a��C�Y[���=�q�H����Ғ��r\�jͨ��e�FE��(9RRouȀ�3��J�NIE������pR,�ġM�65��8)l����)��8 ^J��yh��3�֨7u:�.{r
m^�ر�1��)�4����Dzd��'.?uD�t
�����At�.�Sg4&�Nvq�"'����^Ts*��ۖT
l��Rǟ�|�T��c����M�e��jv��<n+;�)��Y�)<����c0�l��ظģ�x�Nc�1�W�il"�<���� 4_s�΄ƧEw��;;G�J���/��-�:�s��ū�C���}-�hbAʅh=�0^H�ߝ�iq��i~k�`�T"GS��0_��Cm0���qO3�N�m�,o�h�3A�m�l�S��=uo�A�V�8�e��2=ad�N`�;��J���i7�ۚ��s4�`��u�:����I����t]���Z`Ѹ�%�T*0�w�xڄ�8��;Osvk䘉	��V"�������_�K_s�ua����5͌�x_����������0�v�m&_[a��6�a5�T8ZM�i$:��k�i��/θ�>`���OXj�42����h7=�	|_����q�?Uv�����k�\�_tͫ�F<[��� Q�+O�a�"j�F<ZR�!��uk��.�u���A�Vx�    ���y}ӠY���-��v��M�7}k�5�kh�zk��j%���*OH�i���	Wk��㎢c���l��ۻ8R8�Nݯ�x��̳�Es���5#��y����j��4�oy ��X,�upD�K��'N,��9���2���]x=�Tm�iOsUqHN�j�����n����r���4��O �ͽ�=���$�� ���;�:�D��[׭��n@I��)����q�}������o���|����V�4�xM�mM 	�j�|شY�����D�h�s�6ϟ>�ix�U�(),���,V_Z�a��T��vԔ����qp|�̱m��π����#<��&�5�.+��6����A�:@���͊��4��yZ���5�	*q��>v&O$��9�7ͱp"?h;m4%�5��_�!�x�µ �ӎQ��ч4t��#WJ�C�<�g�l�L":��k�v�9�U"�$�@]*�]�C��=��@�a䧺�ͥ�B���M�a%m�^K���{f2<%t�IA[��:~0uڰ@
R���l�ki�j��U8y�@�ׯ�| ��C�~ ʋ�*n<�Z���yR��qk��ɫβ�[��������6����9qC5�ېc�i-�K�DAp�]�g
�؄����{0j���H�����	l�X-Pu�o4���X�v�mJC��j�i<�;O�yH��L�OJP�o�f���n\9�6����qBS���&5���o_"�DW�c�*l�L�dh���B@eΖ���M��^�n��6(s M|C��1��d,������Ň�$���+|��f���#E���D��9� pr~KK��c���VN�˺̆�i��'�����@6lĜ��&��B �R=�R�@؈9m�)E� EӁ�E�WN�}�i%����g�\�e1���I�8 �$ͬ1��2�e��()��^M�lМ9"�⁸	�q�P��p�Sz_�l�H��&d���\Zh3��yZ�I�H���GM�)��q�<�o���)a�%]�6�o�6����I"�ĺ.�Ծz�l@�B�_�kM�0b,��u�N��
K�H��%���>�;���iW6�_�*՚V_}�:�KXG<y+��1 |;��xL�7q눧�W�p�
�����JgV�K/�W�V4����Mo��d�|W�Ī�a�f!F�D͡_ӖA�.@ �a��4�T��w2���N&0�8��J���kM丧����ɇ��6(�q����9o���L}Aj3�@+xb�<�o�����<�z[����l�l/��\�l���`��s��5x�c��8[���yLc��jW�)�F�-R�@4���܂A�#
�ؚ�Ȕl�%Q�Z>�%�i�:�hjk�4k�s^�~�LO�W��_�{�b<mڄ����&��4�m4�Ə}��%��M9��P�X��c��M��M��Ds���i^ʲhz����	*B�=~D:�F��l��=2��cx��n��tJo�����<���j�i஌=���&sⓈ�W"ǍX���C�x5$��{�;��֗Z�p�X�ISp����1�8�g�לb�͉-��3����!;(�9��dMm:�\7�v�}�y��q�X���,൑���z�){���1Ԍ�#�2��̶���)�c��E2ڔ+J��\��_�^���wI����/�Y��ox�u)|K�����N�sP(�^_��$�j4�,�I�Wk�w�
�l���	��7Ӓ�#�ڊ�9�U��nO�y��ףyBI�Z�=��Hǿ>���Z�v�|�b�٭9gπJ�,����s�g3�	@��s�D�2N�o�%�x�G�@	���.E������LY ��3���ލM��9J\���h2�oN����k�G���m�r��a��i)�v���s[9m��PZ��Y~.��lط�5O��j'���h��r��U��:�lc�}�)��K��))�4N;q�#Ƃ��I�ӵ�AP��v��C��.��إ�6����I�u)�3�r�>��5o�HV����rL�xđ����eM%�3�����v(��<u�2�%�qx2���i�v�?=�:�����cg=2�s�4�U0���gڦ�j��m"�eOӋᄫKC�r8��i��s\\�͓s%���@8��t�Đ�5��{���c/�L����׍�\�k�i�y/�E�!	�E�]��9��y�4W�Ǻ!s*3<��'��ϡR4�n�%	4 9C%��;2�h�vpghL������O1�6(>����S�L�КtAcAF�׋)|1�:-ݣ)2Z}8<�_�X���C�R�j�H׮����}��e�ێV��W��t� %���՝�{Ή~+�[9�����DĶ�+���;oao �; =�3��K&�-�����;��Y�zr���0Pj��]su��y����{��x��]�v�Q]f��w��^��6�j���x�}��!q��0R(>��V;o�|�c�x�k(%:mEw,H	���;,'$��9��oگ�č���@<�?�s���	%����1�8!X��zֶ[9�O�@ 2�"bk�����:��-.j��H
����x&G$N�B�|��Bn�˙���1A4�quD�gwD�@��;�{�����b���ƹ\���gm����$���5�Uj��?���o��ޑU;,�%:{��A�q8��x i�S�MCKN�*�Cj�$�������ɵ��ZmMA�j;��ᣧ}'�p8��e�^�w� �P~�O?�'|�޸��@f����R����~	��,@pڱ�t����r���j�ؠ<������b�+%]�w0�w6?~��~��r�xq!�P(/x��ͧ�e%SeDL�S�a��DMo�'WP�(q�
(7j'��[[���mu��@V��:ˆ�3�OM����f�<t^���ݒ�����i�A����nF5 ���p<������'�j3�T@��#k�{�P2�����2��+F�ޮ�4��r_��[p��Ox<K�'��h@��[���3��n��zە}���l
l��Z�'=�7jH�n�������1�w��m'vH���-�cG��K��A��'��K<�3���ؚg����v��~#j��M�7�Y#��<��󭻓	~[9yy ����#[/txBf���ob�+_b��Ã���������<�����@_O�xm��	R<�qV�M�?�^����k���g2B�"ߐ�"(�E:�����K�C�x;x�����J���:P�|��u|O����,�n��ў�
i��FP��xh��&��e� �x���Ac�c���o;2��3H�x�(�A$�Ⱥ\�E0����<b�����䔷�ǲ��{�g�"��L��Y	m�]%������Ė�)�c��²�&�
��Z�b4�|���0b�V���ZVR<��I���Ր{��'6���p��G8�}o�nm�i?D�B�S��i;�� {�Vr�i ����t�j��|`�'6��h��Sx�a����p�ョœFo�al�F��RNiV��Ta��Ή�Y�`P�e~u��bY=@]��Qj�����Qx�;i��w��R<��Ë궎���ڷ��R@�Zb � �F=�f��*�M��f��m���f��T
lDp�� ��Mh�h��*���,z���8��������U��Y�� ��PSZ�?�Wmq�Y�~�PX����4�b�V+��x>m*�j +�q��4��E}G�7��)���b���էb��A�pchlV��E{��XƐa.�?�.��m���h��縼O��2�7CN�
jˠ�q�6ȁ���pA0��>&������N�fLt{|�)?e>����i5(��(����@�V3/�\���`an>>�ĊQ�g�i�*�W����6!��J�JLQ*��:�?��M�T�1�,�;�,& ��MXگ˷����?��c4���U�|Oc�W��8��,5RvE=���0JI�6I4X��A�<�FM�8��XŦW�I
���`,�   8EO��8���WlY�ߝ�#K�g'I��C�H���E0�n���2��FQ9��J]9{#{?��:X�������Y�c+�c����⽰������LK�6�)%�z�$AbM-�||=)%ע�VRv��_Ma�:^��e5R����:���qq�"&ֳ�q'��6'�SK�D��1:�1��M���ˏ+�c�{1n��|�	}��ҤS��T-l��A'&��K�����g%Z�0Z��h����K0^���)�ff�_�8|||�?uOT         �   x�}��
�0Eי�p/2c5;)~�.�P�)�~��4�	n�^8w�0ǜ�|ç�d�$wr�"vZ;��d���Ap�����^��j�DԴ�|�|�bɟ�qr�V����n�]�x�jF�ڶ���}�c�Tc�{��'�'�Q�      	   �   x�}�Mj�@�u��C������	r���ZB�O����ҝ��}hd�^>��A��6Nߣ����Dv`���B�E��_2�/��o����|<S�d�=��E������2֚�EP�ؼ��5nX��b����q�@ˌ%|���M��6�d���͆f��y�p]�R��������n'��
Z�@t0����˸u�R[;9�u�6H����c�F~"�^ � �(�z         W  x�u�]K�0����W�^zr��\9��]��7��l��:e�z�T�)+�P8/y8���]��;����̊Sw&����T�{lڦ'k�6���}e/mM����2�e�)��JŌ��DM#E-�9���O�&�\E���l�puYO������Ў����iT�yd  ��p�G��]ۻ�k��o�o�o�X��s��� ���^IV��TU����������1�A�t��@��� Z���
+o���}�M��̈́�G1�H�,T��̤0�>.���;u.�@�AAA�|�:�N)�y(C���h�n�XPzOFO�0ts���"�s����-�o�ʄ         ~  x���=o7�z�W�L��~l� pg E�iNNl,Ɇ�ɯ��t���h�V����5�2�:�ywz:~���t�w��=L?���&���?=����|H��S��Sx��;O��E��U�?��h�M&1ĎEU^ �D���YE^ d"u�脂�\#0q�??=m4=����|ߐ|Ah�R\<��Y�" l"�q@	�q$U�FP�T� �����5�L�G���U��Aɦ"�/�;�+]��H@�ja�F@�����TT��A���D��Y��.L�"�q�5�E@hz>=��E��nӿ(q�TZ<�G�JKA����8�je������!%V'A�`]E,E�Z�/���[GP���!��]W��l)yH�reyM`�(N[v�vs���TK�C
U�u��!���tw������*���\j�F�# d"��e*Q�n?�#(�T� �JH�ݸ�����qW�Տ�w�~AK��HZ�y�U�u$�]�C$/�#jS�E@�����#�&����'�;���j"e ��פ����O�<�7D�����ȶ��~nP7J�	&�>�LG�%K��.�C��������.MF�T�l0��Lbأ�hK��������DY��G`�ٛ<���z�J!�#0�d� ��V��^����N�Co����CiH�eQ��>�,�?��]\��"�# d!q���$�Xv	�h	<�Jn3^% �"d@��8+���`�e�C#�����.��C�G
GG�.�f��`d�e�����C�H��zh��0��	�"u:=��n����ۖPhq��#]4��d}n�J��1�k%JB$�h��I!�c��e�E)�}$���h|�)F�`�#i���W�>"R�aW�6Z]$M�Ow�����H��l������}#[F��-g^t%iS�E@����8��7O�`u�j<`�k��R��hn���q<!��z�n����/�����k;���g�>�M�?�D����~��#8�td��ۣz�/��3�&�dҍ�mh.�ӺH��Z3B�ZX�飹��~�5�����-;����Ds{�5�q��B���QZ��=�����j]���o4�khhCO9m�u4S��:�g��S��q}#�E�on��`         �  x��Y]��X}��
���v���\���tf{�NG�(�H�B۴͎^�=��u�ʦ̌)m|U��-xp�|r��l�jsZ�EU�m�U�������i��x!��@�D,��X|�Ӑ�E,�D6�Gln#Lx&1�\�U]���xɜ��|E���K�mZ�:߄��j[g�CQn�Ǭܞ�m>^�De�cBU-D�	U1����_��/������%�Ĵ'��*kw�w�~}ڟ�_���{�&R2f���Ĕ���2&�/ߊ�*y�f��y]��:���?z|Ɲ�B�H'�CK�Xb�}рY���k��m�Y��HH*"Ĭ����y����'���RG*��A��=���yz�o�nç\�Ά�8'Z�7q%��"Q�Sm1�=�x�[�c0v?�'n@&�M%yĸ�l2�\l �նX�Y�9W��s��r�p�n��yDY= �+�����\5g�Z�4��(6b\{6�|�OU�)ʬ����ꐷ�{�!�Ϣ��e��ߛ§�8�&}��"R�r:�7�.L�m�������b]���Wٶ�ۢ9�}<[�	�����3�׮�Z��b�������p*�u�oyxN�>�N݉�q�HKh!�q�l�X��u�5��YV����l�7��k�9���)�!&����s�f�P�e��`C�r�,a�	�� �t������������3�ҳɠ��
�Z�#�讨ק�m�Kg�t%<J�!�Ą�l��X�%�Tۭ��@AK��F�gӓqd��P][7���șr�=���o�'e#�(�Ą����ܦ�}��%{)������eŌ��B�(VDa���K��2'U������5����}��S�G��c�v_}9��c�B�Qܶߺj`R"y1�d���^:�~]��n-��{���Ӆ��G͝b�N
�s�y�`Hٌ#g�訥��v�#41a�I�� 9)�!��E�N���A�P}CL*�&��7�����K�i\������$J�d1Ĥ�l���%��j�N����Se
CLϦ��7�:���ByDg,���H�2a��ĳ��l	~�9��II[d
���� &�WI�/0%�]�}8��}X��թk�¹7�M���\0�T�{R�{�K�����ы��L	7�%T��Sܳ��£��&b���sQ����M�b]W�>�z�~�$�2J
"�1Ĕ�lҗ2� 5g���bd8%� ��g���橪���,A� F�0�=�	���:8�ﻼ��G`83N4�E&!bCLO�_O���쫼�U�f�n{�0	C����sJw�:v3!�"����g��=mNu1�z6w��C�\��5����%����=�~�/n�.�|�ʂn�\�Mͤ�G����J���.#K�W�0-<��UӲ^�6�F\�6�����D���ҳ�Q�Xu��C���&L y����C͜�pKE�,1�<D��:mΛ5$��8Ӆ\��� ��'�P�*��py<�ϕ?;;���4^��1��F��<����V���%�l��k*�T��ֳ��V�:��,B�PJ�1�z6<W��Y�O�Cg,K�f�k*��L��܎��Ʃ9����ZDa�����y.�%�w=#v�̚��J1#<�o��i��j��?͜���7$�bFz�d�����sa�	�$!ȄF3ʳ�ǩ~jv�XG�=C��=SYwj����DW���b�V���q��SAYĒJ�K��ĳ���7�h/��Ф/�3ֳ��{�ޕ�X�NJ. �i8o�nyy�+{Y�VW���R�b&�l��VE��p�~ƣj�]�<� �ĞM�!��:?�A;?�ͮ8��m?�pt���%���L �m{B��u��F;����>��/�r����fD'K	� u;.)���ĿDᏴzs'�T���� �����o���������I�'� �΢"i���%�?�����[FJu�d0�|2v+�Ԫ��X���  [��mq�7Ev1�6��#4�n𑂂X�[��L$5^����^VGO�xWa�O�����-?9j�=yo#�n���r
AL�m0�����c��N#ΉN�!&��1��>��K.�EdRjA� &S�N��Z�h���@����z��!�DC�ݧ�zr`�n���c.��6~8E�>ԓ&�U�XS�1�}7F�ݧ�:�.xܽ�K�'�K�%�W�Q���QOʬq�}9=�^B�?c��T��         �  x���I�������)\<�7.2�����
���Af��_�=�؏��U����_$UY�`�`�#�M�:���=% ��c�@���?(��Ѹ��e���إ8/OX�#��������c��Nc�@6R3����I �����P�(�����r#���Gp��?��F�qH2�pa��l�uE�3�o�?�����t^���e�[	^�]��"d*�b��w4����^$��PO����%~�'{�Bg��L�l�/��3�5)/m��y��ĳe�1aϗ��0�?��)'�A��Lp��"���1����Z���v°f�)��-$=�W��f��n�(s��D���J��5���1����J}���!8�o�/
L�P^�3xN�d�r*�O��x�1��&�|���!-��z���ϖ��|���Ւ���'�?0�0v �E�I�@����B%A�n�<�3�J.��Z(�M�S䘤�>f��;�	7s�h�b��E�d/L��~�ځ���Φ����zc��5�R���N�U&ˋvT;B�����a=;�
?�(Bbo������.������vE���d�;Z�I��	��=,ԨXa%�����ye�����Q2E~b#	�"����$n����L�<?�������&��F������U��8����e�p�L�HF1�B�J0IA�
ϏᝋC���ԨF��������j*}�LdB�3��Թn��$�Z-�-g�����!46��G�I�A��>�w�8G���|�k�窙�TM΄��,=���b���a1O��6��/���r� �Q`��J/S����9;����:7�@j2Wl�Y|/bwҺE���el�1QdbN��(�?�C{�E�I}®����F^9V�.H}��r1y���A��2"��*����u�BIn/�8����wB��	&9�w��4�7�u�ow�ɚU�_�ך ����N�*����ٍmYN8���'6�Cn�"x�`
�/�[>�w���Ra�*S�e�h��DS��n��-hG���2�uՍ7�\^�j�}Fð��!4;�W	�0H�V^��xt7�w��o�K�Aq6��/�v���D<�ֻ+k���c���G�$�>aj�茶���E���o��
Lc����s|C�Ìn�[s_��&ۛ�G��	4��#߬ҝ����PV�����oQ��{a�q���_Q{�`��+@5���i��@��h@F�鸸�� R������u�u�g=��3�p��%��ϘC���"�؝�$�w�W	�	��� tGP���<�w�Ff�P�Í��!o,C;�Zڂ��룽Tg�X��mG���������}��))0MBd� ���z�h���0��;��,�"�"'ķ���D�$�|��$s��7,r�78�/ƘT1˝	�o)�	��DBC�/LS�R"���L���s�����pbږv�ŋ�3�PrIn�.8��&�rU%&���o!�H���r.����>�[�i����
GJՉ����}�M�����
����r_9BK�j3��z+\�3|��D����W��t�=,s�7H��}�`����l����r�>?��Zb}״ꛊ�a#�YW+I:j�Δr�YV�V*U#���,⤩y���A�9p�_�f!)w�$����[���t�1wFK�2���k��h0L�(n�g��I�t	���P�}K��y�^���0)!�a��L?ڡ
8��&�U�ǽ{�G����bJGW�����6�Y2v�e���t�"k�JF�xDD�)��}�{T�7B}�`�x��:02��C�h�UA�\|�=�r?u�LS~�I��pRZ?h��u>���3K�u�w:�3�����Tp����7o�P�J0�A3Ptw\�i��r?�wԂm��tn�:�;��\�J��%]��--D��B�v�D����{��!q� I)0�Cz��}~�ϗ
��T���� lA���9�*YP��ųD�jpaB}����n,�]ӅuqǷ�a������	����*��HЗ�#��L�2Ԝ�7��b#c�������QW�"a�n�pg!R�����B�X��^~����km�.�u?N���x^����ܭ�Q��y@낢}B�W���*�q��LjMŵ�l���`��8U�!��J"��5��YI�����ջ��!�~D�bM5-�=�5��A�I�8h�9"��]�����'�N4(~�V{������E��3t�Ҫ���󝑩�a�6�=*�d�r�������uYΌKx���{̴.qKC��b=Ψ����I�����!	f���<���]C����ӗb/�r}�8 ;`q�s�m<����D
7��R�eT��@P�/!�Qծ�V�tD��3�Q�t��p�u���HG|���2S%җekb� �3�2#YV�Nv�����=���x�5����=c��P��1lH�Y�A)�B�ݯQ��D�����(zr^��Z^	�U��ɧ3�G�dp�M�Q|1��h�#�c�D��ٷ���	�`{`*u\�1~%[���EF�}ٝho~(LSl�5��:e�e|,��,wj̒l2"�H�z����&s@4�<��x����
�6dFm��qcl�=��Ѳ�Y�I�V���gdy��5w�F��uz�B����!���U�Y��o}�	A_:uq�>~�_q��[�=ɕ�#֩�ɮB�md7Sմ�+��s�Xq[�f��*�~�� ��А�$��⾬{�����s���v|�?(��&��I-�\]�X3밫\#Wa\�ꖙ�o�U_O]�X&?�������#�:(����}��ܯ���Rk�6/D�QU<�!=�;��.+B}c�͛��,�5+�	a|�=�Ct(�/�Ґ��D��|>�)f�8��J��u�$�oׁ%�]�v\��e@���Bg-m�s�����~`d�J�#}���G`�4,y     
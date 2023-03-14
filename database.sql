


create TABLE articles (
       id serial primary key,
       articleId varchar  UNIQUE NOT NULL,
       userId varchar  NOT NULL,
       vehicleId varchar  NOT NULL,
       publicationDate bigint  NOT NULL,
       brandId varchar  NOT NULL,
       modelId varchar  NOT NULL,
       generationId varchar  NOT NULL,
       likes integer  NOT NULL,
       comments integer  NOT NULL,
       engine integer,
       wheeldrive integer,
       transmission integer,
       about integer[]        
    );

        create TABLE deleted_articles (
        id serial primary key,
        articleId varchar  UNIQUE NOT NULL,
        userId varchar  NOT NULL,
        vehicleId varchar  NOT NULL,
        publicationDate bigint  NOT NULL,
        brandId varchar  NOT NULL,
        modelId varchar  NOT NULL,
        generationId varchar  NOT NULL,
        likes integer  NOT NULL,
        comments integer  NOT NULL,
        engine integer,
        wheeldrive integer,
        transmission integer,
        about integer[],
        deletedDate bigint  NOT NULL,
        user_id integer,
        FOREIGN KEY (user_id) REFERENCES articles (id)
        );


       create TABLE  comments (
        id serial primary key,
        articleId varchar  NOT NULL,
        commentId varchar  UNIQUE NOT NULL,
        commentDate bigint  NOT NULL,
        likes integer  NOT NULL,
        answers integer  NOT NULL,
        userId varchar  NOT NULL
        );

        create TABLE  deleted_comments (
        id serial primary key,
        articleId varchar  NOT NULL,
        commentId varchar  UNIQUE NOT NULL,
        commentDate bigint  NOT NULL,
        likes integer  NOT NULL,
        answers integer  NOT NULL,
        deletedDate bigint  NOT NULL,
        userId varchar  NOT NULL,
        user_id integer,
        FOREIGN KEY (user_id ) REFERENCES comments (id)
        );
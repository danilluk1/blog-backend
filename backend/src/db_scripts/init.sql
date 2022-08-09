CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    author VARCHAR NOT NULL,
    likes integer DEFAULT 0,
    dislikes integer DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    parent_id integer,
    text VARCHAR,
    likes integer DEFAULT 0,
    dislikes integer DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    author_uid VARCHAR NOT NULL,
    post_id INTEGER,
        CONSTRAINT fk_post
            FOREIGN KEY (post_id)
                REFERENCES posts(id)
);
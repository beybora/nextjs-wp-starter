import React from 'react';
import Link from 'next/link';

const PostCardBlack = ({ icon, title, subtitle, description, label = "Read more", href }) => {
    const content = (
        <>
            <div className="mb-5">
                {icon && icon}
                <div className="mt-5">
                    <p className="post-card-title">{title}</p>
                    <h3 className="post-card-subtitle">{subtitle}</h3>
                    <p className="post-card-description">{description}</p>
                </div>
            </div>
            <p className="mt-auto">
                <span className="post-card-label">{label}</span>
            </p>
        </>
    );

    return href ? (
        <Link href={href} className="post-card">
            {content}
        </Link>
    ) : (
        <div className="post-card">
            {content}
        </div>
    );
};

export default PostCardBlack;

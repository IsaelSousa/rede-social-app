import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.css';
import { MenuButton } from '../MenuButton';
import { InputFileButton } from '../InputFileButton';

import { AiOutlineSmile } from 'react-icons/ai';
import { MdPublish } from 'react-icons/Md';
import { ImageRenderer } from '../ImageRenderer';
import { toast } from 'react-toastify';

export const PostSender = () => {
    const [fileUpload, setFileUploaded] = useState<File>();
    const [selectedImage, setSelectedImage] = useState<string>();

    const imageTypes = [
        'image/png',
        'image/jpeg'
    ]

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (imageTypes.includes(file.type.toString())) {
                setFileUploaded(file);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setSelectedImage(reader.result as string);
                }
                reader.readAsDataURL(file);
            } else {
                console.log(file);
                toast.error('Only can use png/jpeg files.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Publicação</h1>

            {selectedImage && <ImageRenderer src={selectedImage} onClick={() => setSelectedImage('')} />}

            <textarea placeholder='Say here.' className={styles.textAreaStyled} cols={60} rows={4} />

            <div className={styles.buttonContainer}>
                <InputFileButton title='Image' onChange={handleFileInputChange} icon={<MdPublish size={20} />} />
                <MenuButton title='Publish' icon={<AiOutlineSmile size={20} />} />
            </div>
        </main>
    );
}
import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.css';
import { MenuButton } from '../MenuButton';
import { InputFileButton } from '../InputFileButton';

import { AiOutlineSmile } from 'react-icons/ai';
import { MdPublish } from 'react-icons/Md';
import { ImageRenderer } from '../ImageRenderer';
import { toast } from 'react-toastify';
import { getPost, sendPost } from '@/services/api';
import CryptoJS from 'crypto-js';
import { useDispatch } from '@/context/provider';

export const PostSender = () => {
    const [selectedImage, setSelectedImage] = useState<string>();
    const [selectedImageToApi, setSelectedImageToApi] = useState<string>();
    const [post, setPost] = useState<string>();

    const dispatch = useDispatch();

    const imageTypes = [
        'image/png',
        'image/jpeg'
    ]

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            if (imageTypes.includes(file.type.toString())) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64String = reader.result?.toString().split(',')[1];
                    setSelectedImageToApi(base64String);
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

    const handleGetData = () => {
        getPost()
        .subscribe({
          next: (value: any) => {
            const payload = { data: value['message'] };
            dispatch({ type: 'SET_POST', payload });
          },
          complete: () => {
  
          },
          error: () => {
  
          }
        });
    }

    const handlePost = () => {
        if (post && post?.length > 0) {
            const postData = {
                Image: selectedImageToApi,
                PostMessage: post
            }

            const key = process.env.NEXT_PUBLIC_APP_ENCRYPTED_KEY;
            if (key) {
                const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(postData), CryptoJS.enc.Utf8.parse(key), {
                    padding: CryptoJS.pad.Pkcs7,
                    mode: CryptoJS.mode.ECB
                });
                const hash = encryptedData.toString();
                sendPost(hash)
                .subscribe({
                    complete: () => {
                        setPost('');
                        setSelectedImage('');
                        setSelectedImageToApi('');
                        handleGetData();
                    },
                    error: (err) => {
                    },
                });
            }
        } else {
            toast.error('Say something before of publish.', {
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
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Publicação</h1>

            {selectedImage && <ImageRenderer src={selectedImage} onClick={() => setSelectedImage('')} />}

            <textarea placeholder='Say here.' className={styles.textAreaStyled} cols={60} rows={3} onChange={(e) => setPost(e.target.value)} value={post} />

            <div className={styles.buttonContainer}>
                <InputFileButton title='Image' onChange={handleFileInputChange} icon={<MdPublish size={20} />} />
                <MenuButton title='Publish' icon={<AiOutlineSmile size={20} />} onClick={handlePost} />
            </div>
            <div className={styles.divider}></div>
        </main>
    );
}
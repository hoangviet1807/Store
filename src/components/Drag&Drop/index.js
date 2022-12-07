import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

export const DragDrop = () => {
    const [image, setImage] = useState()

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            setImage(
                acceptedFile.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })
    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the Image here...</p> : <p>Drag 'n' drop Image here || click to select Image</p>}
            </div>
            <div>
                {image?.map((upFile) => {
                    return (
                        <div>
                            <img src={upFile.preview} style={{ width: '600px', height: '400px' }} alt='preview' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

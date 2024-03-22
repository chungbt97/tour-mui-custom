/**
 * Download file
 * @param data : blob file
 * @param filename : save as name
 */
export const downloadBlobFile = (data: Blob, filename: string) => {
  const blob = new Blob([data], { type: 'application/octet-stream' })

  const blobURL =
    window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob)

  // create link element
  const tempLink = document.createElement('a')
  tempLink.style.display = 'none'
  tempLink.href = blobURL
  tempLink.setAttribute('download', filename)

  if (typeof tempLink.download === 'undefined') {
    tempLink.setAttribute('target', '_blank')
  }

  document.body.appendChild(tempLink)
  tempLink.click()

  setTimeout(() => {
    document.body.removeChild(tempLink)
    window.URL.revokeObjectURL(blobURL)
  }, 150)
}

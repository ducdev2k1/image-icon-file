# File Thumbnail Icon Component

## English

### Description

This component displays a file thumbnail icon based on the file name.

### Installation

Ensure you have Vue 3 installed. Then, install the package via npm:

```sh
npm install @ducdev2k1/file-icon
```

Then, import the component in your project.

### Usage

```vue
<script setup lang="ts">
  import FileThumbnailIcon from '@ducdev2k1/file-icon';
</script>

<template>
  <FileThumbnailIcon nameFile="document.pdf" alt="PDF File" class="icon" />

  <!--Folder-->
  <FileThumbnailIcon nameFile="document" isDirectory alt="Folder" class="icon" />
</template>
```

### Props

| Prop        | Type    | Required | Description                          |
| ----------- | ------- | -------- | ------------------------------------ |
| nameFile    | String  | Yes      | The name of the file to get the icon |
| isDirectory | Boolean | No       | Return icon folder                   |
| alt         | String  | No       | Alternative text for the image       |

### Attributes

This component supports all native `<img>` attributes via `$attrs`.

---

## Tiếng Việt

### Mô tả

Component này hiển thị icon thumbnail của file dựa vào tên file.

### Cài đặt

Hãy đảm bảo bạn đã cài đặt Vue 3. Sau đó, cài đặt package qua npm:

```sh
npm install @ducdev2k1/file-icon
```

Sau đó, import component vào dự án của bạn.

### Cách sử dụng

```vue
<script setup lang="ts">
  import FileThumbnailIcon from '@ducdev2k1/file-icon';
</script>

<template>
  <FileThumbnailIcon nameFile="document.pdf" alt="Tệp PDF" class="icon" />

  <!--Folder-->
  <FileThumbnailIcon nameFile="document" isDirectory alt="Folder" class="icon" />
</template>
```

### Props

| Prop        | Kiểu    | Bắt buộc | Mô tả                             |
| ----------- | ------- | -------- | --------------------------------- |
| nameFile    | String  | Có       | Tên của tệp để lấy icon tương ứng |
| isDirectory | Boolean | No       | Trả về icon Thư mục               |
| alt         | String  | Không    | Văn bản thay thế cho hình ảnh     |

### Thuộc tính

Component này hỗ trợ tất cả các thuộc tính của thẻ `<img>` thông qua `$attrs`.

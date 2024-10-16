import { createSlice } from '@reduxjs/toolkit';

import { Slices } from '@/src/application/data/slices';
import { type SourceState } from '@/src/application/data/source/state';

const initialState: SourceState = {
  sources: [
    {
      id: '1',
      fileName: 'document1',
      fileSize: 1024,
      url: 'https://example.com/document1',
      extension: 'pdf',
      created: '2023-01-01T12:00:00Z',
    },
    {
      id: '2',
      fileName: 'image1',
      fileSize: 2048,
      url: 'https://example.com/image1',
      extension: 'jpg',
      created: '2023-02-15T14:30:00Z',
    },
    {
      id: '3',
      fileName: 'video1',
      fileSize: 4096,
      url: 'https://example.com/video1',
      extension: 'mp4',
      created: '2023-03-20T18:45:00Z',
    },
    {
      id: '4',
      fileName: 'spreadsheet1',
      fileSize: 8192,
      url: 'https://example.com/spreadsheet1',
      extension: 'xlsx',
      created: '2023-04-10T09:15:00Z',
    },
    {
      id: '5',
      fileName: 'code1',
      fileSize: 512,
      url: 'https://example.com/code1',
      extension: 'js',
      created: '2023-05-05T21:00:00Z',
    },
  ],
};

const slice = createSlice({
  name: Slices.SOURCE,
  initialState,
  reducers: {},
});

export default slice.reducer;

import {createApp} from 'vue'
const app = createApp({})

import Frontend from '@/views/layouts/Frontend';
import Backend from '@/views/layouts/Backend';

app.component('frontend-layout', Frontend);
app.component('backend-layout', Backend);
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://mdrlkfisfltbwauxqvwg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcmxrZmlzZmx0YndhdXhxdndnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NTQ2ODMsImV4cCI6MjAzNTIzMDY4M30.aJjssepQSvYz2LJ-O5YFiO33CdGsbziboXGK86auh5c';

const supabase = createClient(supabaseUrl, supabaseKey);

async function insertVideoData(senderId, firstName, videoId, url, caption) {
    const { data, error } = await supabase
        .from('videos')
        .insert([
            { sender_id: senderId,first_name:firstName, video_id: videoId, url: url, caption: caption }
        ]);

    if (error) {
        console.error('Error inserting data:', error);
        return { success: false, error };
    } else {
        console.log('Data inserted successfully:', data);
        return { success: true, data };
    }
}

module.exports = {
    supabase,
    insertVideoData
};
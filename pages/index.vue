<script lang="ts">
import useUserStore from '~/stores/userStore';

let userStore = useUserStore();

export default {
    data() {
        return {
            cafes: [
                { name: 'ThruLine', description: 'A cozy spot for gourmet coffee.', priceLevel: 2 },
                { name: 'Five Stones', description: 'Beautiful Location and scenery around this coffee shop', priceLevel: 2 },
                { name: 'Aerie Coffee', description: 'Mid Food, good vibes', priceLevel: 1 }
            ],
            reviews: [
                { user: 'Rachel', comment: 'This is the best coffee I’ve ever had. A great place for studying.', cafe: 'Zoka', likes: 3, liked: false },
            ],
            maxHearts: 1, // Set the maximum number of hearts displayed
            username: userStore.methods.getUser
        };
    },
    methods: {
        toggleLike(index: number) {
            const review = this.reviews[index];
            if (review.liked) {
                review.likes--;
            } else {
                review.likes++;
            }
            review.liked = !review.liked;
        },
    }
};

definePageMeta({ layout: 'dashboard' });
</script>

<template>
    <div class="bg-coffee-100 md:bg-coffee-200">
        <!--Cards for Cafes-->
        <div class="text-[#3f1c04] text-[32px] font-black font-['Playfair Display'] bg-mocha px-2">
            Cafe’s Near Me
        </div>
        <div class="bg-mocha py-1">
            <!-- Cafe cards as UButtons with hover effect -->
            <div v-for="(cafe, index) in cafes" :key="index"
                :to="`/cafes/${cafe.name.replace(/\s+/g, '-').toLowerCase()}`"
                class="mx-1 mt-3 bg-mocha hover:bg-mocha rounded-lg shadow border border-coffee-700 p-4 flex justify-between items-center transition-colors duration-200">
                <div>
                    <p class="text-white text-[18px] font-normal font-['Playfair Display']">{{ cafe.name }}</p>
                    <p class="text-[#3f1c04] text-[14px] font-light mt-1">{{ cafe.description }}</p>
                </div>
                <div class="flex items-center space-x-1">
                    <span v-for="n in 3" :key="n" class="text-coffee-800 text-xl font-normal font-['Anonymous Pro']"
                        :class="{ 'opacity-25': n > cafe.priceLevel }">
                        $
                    </span>
                </div>
            </div>
        </div>

        <!--Review Section-->
        <div class="text-[#3f1c04] text-[32px] font-black font-['Playfair Display'] bg-mocha px-2">
            Top Reviews
        </div>

        <!--Review Container-->
        <div class="bg-mocha py-1">
            <div v-for="(review, index) in reviews" :key="index"
                class="mx-1 mt-3 bg-mocha rounded-lg shadow border border-coffee-700 p-4">
                <span class="text-white text-[18px] font-normal font-['Playfair Display']">{{ review.user }}</span>
                <!--Like Button-->
                <div class="mr4-10 flex items-center space-x-2 ml-auto">
                    <div class="w-[26px] h-[25px] flex-col items-left ml-auto">
                        <span :class="{
                            'text-[#3f1c04]': review.liked, // Filled heart color when liked
                            'text-coffee-700/25': !review.liked // Transparent heart color before liked
                        }" class="text-xl cursor-pointer" @click="toggleLike(index)">
                            ♥
                        </span>
                    </div>
                    <span class="text-coffee-900 text-sm font-['IBM Plex Mono'] ml-2">{{ review.likes }}</span>
                    <p class="text-[#3f1c04] text-[14px] font-['Playfair Display']">{{ review.comment }}</p>
                    <span class="text-coffee-900 text-[10px] font-['Playfair Display']">Review on {{ review.cafe
                        }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
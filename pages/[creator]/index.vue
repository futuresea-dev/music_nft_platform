<script setup>
const route = useRoute();
const router = useRouter();

const creator = route.params.creator;

router.push("/user/" + creator);
</script>

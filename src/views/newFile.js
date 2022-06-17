import TheWelcome from "@/components/TheWelcome.vue";

export default await (async () => {
let message = $ref("Hello, World!");

setTimeout(() => {
message = "I Have Been Changed";
}, 2000);
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
() => {
// @ts-ignore
[TheWelcome,];
// @ts-ignore
[message];
};
return {};
}
});
return {} as typeof __VLS_Component & (new () => { $slots: typeof import('./HomeView.vue.__VLS_template').default; });
})();

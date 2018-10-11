const mixin={
  methods:{
    test(){
      console.log(`%c我是mixin里方法`,`color:red;`);
    }
  },
  mounted(){
    this.test();
  }
}
export default mixin;

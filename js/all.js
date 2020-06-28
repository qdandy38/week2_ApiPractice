const obj = {
    data: {
        apiPath: 'https://course-ec-api.hexschool.io',
        uuid: '822f665f-fdb8-48cd-a3c7-a13100ae246a',
        dataList: [] //存放遠端撈回的資料
    },
    getData() {
        const vm = this;
        const url = `${vm.data.apiPath}/api/${vm.data.uuid}/ec/products`;

        axios.get(url)
            .then(function(res) {
                vm.data.dataList = res.data.data;
                console.log(vm.data.dataList);
                vm.render();
            })
            .catch(function(err) {
                console.log(`資料有誤，${err}`);
            })
    },
    render() {
        const vm = this;
        const list = document.querySelector('.list');
        const renderTarget = vm.data.dataList;
        let str = '';
        renderTarget.forEach(function(item) {
            str += `
            <div class="col-md-4  mb-3">
                <div class="card h-100 box-shadow">
                    <div class="card-header p-0 ">
                        <img src="${item.imageUrl[0]}" class="card-img-top img-fluid" alt="...">
                    </div>
                    <div class="card-body p-0 d-flex text-center align-items-center">
                        <div class="item-name col py-3 font-weight-bolder text-primary" style="font-size: 1.25rem;">${item.title}</div>
                        <div class="item-price col py-3 font-weight-bolder text-primary" style="font-size: 1.25rem;">
                            ${item.price}
                            <span class="text-secondary " style="font-size:.75rem; text-decoration: line-through;">${item.origin_price}</span>
                        </div>
                    </div>
                    <div class="card-footer p-0 ">
                        <a href="#" class="btn btn-second w-100 py-3">加入購物車</a>
                    </div>
                </div>
            </div>
            `
        })
        list.innerHTML = str;
    }
}
const init = () => {
    obj.getData();
};
init();
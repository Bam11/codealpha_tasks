import Button from './button'

export default function Calculator() {
  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className="bg-gray-100 p-4 text-right text-6xl rounded-xl mb-6 shadow-sm">
        0
      </div>
      <div className="grid grid-cols-4 gap-5">
        <Button className="bg-red-100 text-red-400">
          C
        </Button>
        <Button className="">
          %
        </Button>
        <Button className="">
          &#8730;
        </Button>
        <Button className="bg-orange-400 text-white">
          &#247;
        </Button>
        <Button className="">
          1
        </Button>
        <Button className="">
          2
        </Button>
        <Button className="">
          3
        </Button>
        <Button className="bg-orange-400 text-white">
          &#215;
        </Button>
        <Button className="">
          4
        </Button>
        <Button className="">
          5
        </Button>
        <Button className="">
          6
        </Button>
        <Button className="bg-orange-400 text-white">
          &#x2212;
        </Button>
        <Button className="">
          7
        </Button>
        <Button className="">
          8
        </Button>
        <Button className="">
          9
        </Button>
        <Button className="bg-orange-400 text-white">
          &#x2b;
        </Button>
        <Button className="col-span-2">
          0
        </Button>
        <Button className="">
          &#183;
        </Button>
        <Button className="bg-green-400 text-white">
          &#x3d;
        </Button>
      </div>
    </div>
  )
}

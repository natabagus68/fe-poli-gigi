const BreadCrums = (props: { data: string[] }) => {
    return (
        <>
            <div className="flex gap-2">
                {props.data?.map((item: string, ind: number) => {
                    return (
                        <>
                            <p
                                key={ind}
                                className="text-gray-600 text-sm font-jura"
                            >
                                {item}{" "}
                                {ind + 1 == props.data.length ? null : "/"}
                            </p>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default BreadCrums;
